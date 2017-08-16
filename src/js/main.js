
const xflow = {
  "requirements": [
    {
      "xtype": "flow",
      "version": 1
    },
    {
      "xtype": "flox",
      "version": 1
    }
  ],
  "variables" : {
    "input" : [
      {
        "name": "CounterValue",
        "vtype": "number"
      }
    ],
    "output" : [
      {
        "name": "CounterValue",
        "vtype": "number"
      }
    ],
    "local" : [
    ]
  },
  "nodes": [
    {
      "id": 1,
      "nodetype": "flow",
      "action": "start",
      "label" : "Start",
      "parameters": {
        "flow" : {
        }
      }
    },
    {
      "id": 2,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox": {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 3,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox": {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 4,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 5,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 6,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 7,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 8,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox": {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 9,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Increment",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 10,
      "nodetype": "flow",
      "action": "end",
      "label" : "End",
      "parameters": {
        "flow" : {
        }
      }
    }
  ],
  "edges": [
    [ 1, 2 ],
    [ 2, 3 ],
    [ 3, 4 ],
    [ 4, 5 ],
    [ 5, 6 ],
    [ 6, 7 ],
    [ 7, 8 ],
    [ 8, 9 ],
    [ 9, 10 ]
  ],
  "branches" : [
  ]
};

const xflow_2 = {
  "requirements": [
    {
      "xtype": "flow",
      "version": 1
    },
    {
      "xtype": "flox",
      "version": 1
    }
  ],
  "variables" : {
    "input" : [
      {
        "name"  : "CounterValue",
        "vtype"  : "number",
        "value" : "0"
      }
    ],
    "output" : [
      {
        "name" : "CounterValue",
        "vtype" : "number"
      }
    ],
    "local" : [
      {
        "name": "LoopValue",
        "vtype": "boolean",
        "value" : "false"
      }
    ]
  },
  "nodes": [
    {
      "id": 1,
      "nodetype": "flow",
      "action": "start",
      "label" : "Start",
      "parameters": {
        "flow" : {
        }
      }
    },
    {
      "id": 2,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Start",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue+1",
          "returns"    : {
            "name"   : "CounterValue",
            "vtype"   : "number"
          }
        }
      }
    },
    {
      "id": 3,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Start",
      "parameters": {
        "flox" : {
          "expression" : "$CounterValue>5",
          "returns"    : {
            "name"   : "LoopValue",
            "vtype"   : "boolean"
          }
        }
      }
    },
    {
      "id": 4,
      "nodetype": "flow",
      "action": "branch",
      "label" : "Start",
      "parameters": {
        "flow" : {
          "name": "LoopValue",
          "vtype": "boolean"
        }
      }
    },
    {
      "id": 5,
      "nodetype": "flow",
      "action": "end",
      "label" : "Start",
      "parameters": {
        "flow" : {
        }
      }
    }
  ],
  "edges": [
    [ 1, 2 ],
    [ 2, 3 ],
    [ 3, 4 ],
    [ 4, 2 ],
    [ 4, 5 ]
  ],
  "branches" : [
    {
      "edge"   : [4,5],
      "xvar"  : {
        "name"  : "LoopValue",
        "vtype"  : "boolean",
        "value" : "true"
      }
    },
    {
      "edge"   : [4,2],
      "xvar"  : {
        "name"  : "LoopValue",
        "vtype"  : "boolean",
        "value" : "false"
      }
    }
  ]
};


const xflow_3 = {
  "requirements": [
    {
      "xtype": "flow",
      "version": 1
    },
    {
      "xtype": "flox",
      "version": 1
    }
  ],
  "variables" : {
    "input" : [
      {
        "name"  : "CalcValueA",
        "vtype"  : "number",
        "value" : "1"
      },
      {
        "name"  : "CalcValueB",
        "vtype"  : "number",
        "value" : "2"
      }
    ],
    "output" : [
      {
        "vtype" : "number",
        "name" : "ReturnValue"
      }
    ],
    "local" : [
      {
        "name"  : "ReturnValue",
        "vtype"  : "number",
        "value" : "0"
      }
    ]
  },
  "nodes": [
    {
      "id": 1,
      "nodetype": "flow",
      "action": "start",
      "label" : "Start",
      "parameters": {
        "flow" : {
        }
      }
    },
    {
      "id": 2,
      "nodetype": "flox",
      "action": "evalexpr",
      "label" : "Flox",
      "parameters": {
        "flox" : {
          "expression" : "$CalcValueA<$CalcValueB",
          "returns"    : {
            "name"   : "ReturnValue",
            "vtype"   : "boolean"
          }
        }
      }
    },
    {
      "id": 3,
      "nodetype": "flow",
      "action": "branch",
      "label" : "Branch",
      "parameters": {
        "flow" : {
          "name": "ReturnValue",
          "vtype": "boolean"
        }
      }
    },
    {
      "id": 4,
      "nodetype": "flow",
      "action": "end",
      "label" : "End",
      "parameters": {
        "flow" : {
        }
      }
    },
    {
      "id": 5,
      "nodetype": "flow",
      "action": "end",
      "label" : "End",
      "parameters": {
        "flow" : {
        }
      }
    }
  ],
  "edges": [
    [ 1, 2 ],
    [ 2, 3 ],
    [ 3, 4 ],
    [ 3, 5 ]
  ],
  "branches" : [
    {
      "edge"   : [3,4],
      "xvar" : {
        "name"  : "ReturnValue",
        "vtype"  : "boolean",
        "value" : "true"
      }
    },
    {
      "edge"   : [3,5],
      "xvar" : {
        "name"  : "ReturnValue",
        "vtype"  : "boolean",
        "value" : "false"
      }
    }
  ]
};

class XFlowGraph {

  constructor(svgSelector) {
    this.svg = d3.select(svgSelector);
    this.init();
  }

  init() {
    this.width = +this.svg.attr("width");
    this.height = +this.svg.attr("height");
    this.g = this.svg.append("g").attr("class", "everything");

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

    this.svg.append("svg:defs").selectAll("marker")
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

    this.initZoom();
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
      .text((d)=> { return d.id; });

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

    const tickActions = ()=> {
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

    this.simulation.on("tick", tickActions );

  }

  initZoom() {
    const zoom_handler = d3.zoom()
      .on("zoom", ()=> {
        this.g.attr("transform", d3.event.transform)
    });
    zoom_handler(this.svg);

  }
}

const xflowGraph = new XFlowGraph("#g1");
xflowGraph.setXFlow(xflow);

const xflowGraph2 = new XFlowGraph("#g2");
xflowGraph2.setXFlow(xflow_2);

const xflowGraph3 = new XFlowGraph("#g3");
xflowGraph3.setXFlow(xflow_3);

