
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

var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

var g = svg.append("g")
    .attr("class", "everything");

var nodes_data = xflow.nodes;

var simulation = d3.forceSimulation()
  .nodes(nodes_data);	

simulation
  .force("charge_force", d3.forceManyBody())
  .force("center_force", d3.forceCenter(width / 2, height / 2));

const nodeColorFill = (d) => {
  if (d.nodetype === "flow") {
    if (d.action == "start") {
      return "green";
    } else {
      return "red";
    }
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
  .attr("r", 15)
  .attr("fill", nodeColorFill);

simulation.on("tick", tickActions );

var links_data = xflow.edges.map((tup)=> {
  return {
    "source": tup[0],
    "target": tup[1]
  };
});

var link_force = d3.forceLink(links_data).id(d=>d.id);

simulation.force("links",link_force)

var link = g.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links_data)
  .enter().append("line")
  .attr("stroke-width", 3);        

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

