
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

var svg = d3.select("svg");
var width = +svg.attr("width");
var height = +svg.attr("height");

var g = svg.append("g")
    .attr("class", "everything");


var nodes_data = xflow_2.nodes;

var links_data = xflow_2.edges.map((tup)=> {
  return {
    "source": tup[0],
    "target": tup[1]
  };
});

var simulation = d3.forceSimulation()
  .nodes(nodes_data);	

var link_force = d3.forceLink(links_data).id(d=>d.id);

var radius = 12;
var gravity = 165;

var collide_force = d3.forceCollide(radius).strength(gravity);   
     
simulation
  .force("center_force", d3.forceCenter(width / 2, height / 2))
  .force("charge_force", d3.forceManyBody().strength(-gravity))
  .force("links", link_force)
  .force("collide", collide_force);

const nodeColorFill = (d) => {
  if (d.nodetype === "flow") {
    if (d.action == "start") {
      return "lightgreen";
    } else if (d.action == "branch") {
      return "green";
    } else {
      return "red";
    }
  } else if (d.nodetype === "flox") {
      return "pink";
  } else {
      return "blue";
  }
}

//draw circles for the nodes 
var node = g.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes_data)
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("fill", nodeColorFill);

/*
  .append("circle")
  .attr("r", 5)
  .attr("fill", nodeColorFill);

var node = g.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .enter()
	.append("text")
	.text(function (d) { return d.name; })
	.style("text-anchor", "middle")
	.style("fill", "#555")
	.style("font-family", "Arial")
	.style("font-size", 12)
*/

simulation.on("tick", tickActions );

var link = g.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links_data)
  .enter().append("line")
  .attr("stroke-width", 2);        

function tickActions() {
  node
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  link
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

}

var zoom_handler = d3.zoom()
  .on("zoom", zoom_actions);

zoom_handler(svg);     

function zoom_actions(){
  g.attr("transform", d3.event.transform)
}

class XFlowGraph {

  constructor(svgSelector) {
    this._svg = d3.select(svgSelector);
    this._width = +this.svg.attr("width");
    this._height = +this.svg.attr("height");
    this._g = svg.append("g").attr("class", "everything");
    this._edges = [];
    this._nodes = [];
  }

  addNode(node) {

  }

}

