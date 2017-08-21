
class GraphCanvas {
  constructor(svgSelector) {
    this.svg = d3.select(svgSelector);
    this.width = +this.svg.attr("width");
    this.height = +this.svg.attr("height");
    this.init();
  }

  init() {
    this.g = this.svg.append("g");
    this.initZoom();
  }

  initZoom() {
    const zoom_handler = d3.zoom()
      .on("zoom", ()=> {
        this.g.attr("transform", d3.event.transform)
    });
    zoom_handler(this.svg);

  }
}

class GraphGrid {

  constructor(canvas) {
    this.canvas = canvas;

    this.init();
  }

  init() {

    this.g = this.canvas.g.append("g");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    var margin = {
      top    : 5,
      right  : 5,
      bottom : 5,
      left   : 5
    };

    var x = d3.scaleLinear().range([0, this.width]);
    var y = d3.scaleLinear().range([this.height, 0]);

    this.g
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // gridlines in x axis function
    function make_x_gridlines() {
      return d3.axisBottom(x)
        .ticks(5)
    }

    // gridlines in y axis function
    function make_y_gridlines() {
      return d3.axisLeft(y)
        .ticks(5)
    }

    this.g.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + this.height + ")")
      .call(make_x_gridlines()
        .tickSize(-this.height)
        .tickFormat("")
      )

    // add the Y gridlines
    this.g.append("g")
      .attr("class", "grid")
      .call(make_y_gridlines()
        .tickSize(-this.width)
        .tickFormat("")
      )
  }

}

class XFlowGraph {

  constructor(canvas) {
    this.canvas = canvas;
    this.init();
  }

  init() {

    this.g = this.canvas.g.append("g").attr("class", "everything");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.radius = 7;
    this.gravity = 65;

    this.nodeTypeColorProfile = {
      "flow" : {
        "start" : "blue",
        "end"   : "red",
        "branch" : "green"
      },
      "flox" : {
        "evalexpr": "pink"
      }
    };

    this.canvas.svg.append("svg:defs").selectAll("marker")
      .data(["end"])      // Different link/path types can be defined here
      .enter().append("svg:marker")    // This section adds in the arrows
      .attr("id", String)
      .attr("class", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("svg:path")
      .attr("d", "M0,-5L10,0L0,5");

  }

  setXFlow(xflow) {
    this.xflow = xflow;

    this.nodes = xflow.nodes;
    this.links = xflow.edges.map((tup)=> {
      return {
        "source": tup[0],
        "target": tup[1]
      };
    });

    this.simulation = d3.forceSimulation().nodes(this.nodes);

    var link_force = d3.forceLink(this.links).id(d=>d.id);

    var collide_force = d3.forceCollide(this.radius).strength(this.gravity);

    this.simulation
      .force("center_force", d3.forceCenter(this.width / 2, this.height / 2))
      .force("charge_force", d3.forceManyBody().strength(-this.gravity))
      .force("links", link_force)
      .force("collide", collide_force);

    const nodeColorFill = (d) => {
      const pr = this.nodeTypeColorProfile;
      const o1 = pr[d.nodetype];

      if (o1) {
        const o2 = o1[d.action];
        if (o2) {
          return o2;
        }
      }
      return "black";
    }

    this.linkG = this.g.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.links)
      .enter()
      .append("svg:path")
      .attr("class", "link")
      .attr("marker-end", "url(#end)");

    this.nodeG = this.g.append("g")
      .selectAll(".node")
      .data(this.nodes)
      .enter().append("g")
      .attr("class", "node");

    this.nodeG
      .append("circle")
      .attr("r", this.radius)
      .attr("fill", nodeColorFill);

    this.nodeG.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .text((d)=> {
        if (d.nodetype == "flox") {
          return "$"  + d.parameters.flox.returns.name + " := \n" + "(" + d.parameters.flox.expression + ")";
        } else if ((d.nodetype == "flow") && (d.action == "branch")) {
          return "Test $" + d.parameters.flow.name;
        } else {
          return d.label;
        }
      });

    const radius = this.radius;
    this.nodeG
      .on("mouseover", function() {
        d3.select(this).select("circle").transition()
          .duration(750)
          .attr("r", radius * 1.5);
      })
      .on("mouseout", function() {
        d3.select(this).select("circle").transition()
          .duration(750)
          .attr("r", radius);
      });

    const drag_handler = d3.drag()
      .on("start", (d)=> {
          if (!d3.event.active) {
            this.simulation.alphaTarget(0.3).restart();
          }
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (d)=> {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      })
      .on("end", (d)=> {
        if (!d3.event.active) {
          this.simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      });

    drag_handler(this.nodeG);

    const pathCurveTickActions = ()=> {
      this.linkG.attr("d", function(d) {
        var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
        return "M" +
          d.source.x + "," +
          d.source.y + "A" +
          dr + "," + dr + " 0 0,1 " +
          d.target.x + "," +
          d.target.y;
      });

      this.nodeG
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")"; });
    }

    const pathLineTickActions = ()=> {
      this.linkG.attr("d", function(d) {
        var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = 0;

        return "M" +
          d.source.x + "," +
          d.source.y + "A" +
          dr + "," + dr + " 0 0,1 " +
          d.target.x + "," +
          d.target.y;
      });

      this.nodeG
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")"; });
    }

    const lineTickActions = ()=> {
      this.nodeG
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

      this.linkG
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
    }

    this.simulation.on("tick", pathLineTickActions );

  }

}

const loadAndRender = (path, id, cb)=> {
  const canvas = new GraphCanvas(id);
  const grid = new GraphGrid(canvas);
  d3.json(path, (res) => {
    const xflowGraph = new XFlowGraph(canvas);
    xflowGraph.setXFlow(res);
  });
}

loadAndRender('data/xflow_10_steps.json', "#g1");
loadAndRender('data/xflow_loop.json', "#g2");
loadAndRender('data/xflow_branch.json',"#g3");
loadAndRender('data/xflow_add.json',"#g4");

