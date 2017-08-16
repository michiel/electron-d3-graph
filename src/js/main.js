
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
      .append("line")
      .attr("stroke-width", 2);        

    this.nodeG = this.g.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.nodes)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", nodeColorFill);

    const tickActions = ()=> {
      this.nodeG
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

      this.linkG
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
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

