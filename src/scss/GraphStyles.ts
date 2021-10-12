import Cytoscape from 'cytoscape';
export let GraphStyles:Cytoscape.Stylesheet[] = [
  {
    selector: "node",
    style: {
      width: "30%",
      height: "30%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "lightgreen",
      "border-color": "green",
      "border-width": "2",
      color: "black",
    },
  },
  {
    selector: 'edge',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "3",
      "target-arrow-shape": "triangle",
      "line-color": "green",
      "target-arrow-color": "darkgreen",
      "font-weight": "bold",
    },
  },
  {
    selector: 'node[id = "Kubernetes Cluster"]',
    style: {
      shape: "rectangle",
      width: "90%",
      height: "90%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "lightblue",
      "border-color": "green",
      "border-width": "2",
      color: "black",
    }
  },
  {
    selector: 'node[id = "ingress-nginx"]',
    style: {
      shape: "rectangle",
      width: "80%",
      height: "40%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "lightblue",
      "border-color": "green",
      "border-width": "2",
      color: "black",
    },
  },
  {
    selector: 'node[class = "stateful"]',
    style: {
      shape: "rectangle",
      width: "40%",
      height: "40%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "pink",
      "border-color": "green",
      "border-width": "2",
      color: "black",
    },
  },
  {
    selector: 'node[class = "service"]',
    style: {
      shape: "round-diamond",
      width: "40%",
      height: "40%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "lightyellow",
      "border-color": "green",
      "border-width": "2",
      color: "black",
    },
  },
  {
    selector: 'node[class = "namespace"]',
    style: {
      shape: "rectangle",
      width: "60%",
      height: "60%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "lightblue",
      "border-color": "green",
      "border-width": "2",
      color: "black",
    }
  },
  {
    selector: 'edge[label = "service"]',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "3",
      "target-arrow-shape": "triangle",
      "line-color": "green",
      "target-arrow-color": "darkgreen",
      "font-weight": "bold",
      "line-style": 'dotted'
    },
  },
  {
    selector: 'edge[label = "connection"]',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "3",
      "target-arrow-shape": "none",
      "line-color": "red",
      "font-weight": "bold",
      "line-style": 'dotted'
    },
  },

]