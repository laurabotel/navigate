import Cytoscape from 'cytoscape';
const kubernetesIcon = "https://image.pngaaa.com/630/3063630-middle.png"
const textColor = "black"
const backgroundColor = ""
//#932af5
const borderColor = "rgb(87,39,199)"
//orange rgb(255, 136, 0)
const arrowColor = "rgb(87,39,199)"
const connectionColor = "rgb(75, 75, 75)"
const font = "Calibri";
const podIcon = "https://i.ibb.co/VDG8MVh/podicon3.png"
const labelColor = "whitesmoke";
const networkPolicyNodeSize = '10%';

export let GraphStyles:Cytoscape.Stylesheet[] = [
  {
    //default node styling
    selector: 'node',
    style: {
      shape: "ellipse",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      // "border-color": "none",
      // "border-width": "2",
      color: textColor,
    },
  },
  {
    //default node styling
    selector: 'node[class = "daemonSet"]',
    style: {
      shape: "round-pentagon",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      // "border-color": "none",
      // "border-width": "2",
      color: "whitesmoke",
    },
  },
  {
    selector: 'node[class = "hover"]',
    style: {
      shape: "ellipse",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      // "background-image": ["https://i.ibb.co/zNx6TML/podicon.png"],
      "background-color": "lightblue",
      // "background-image": ["https://cdn.iconscout.com/icon/premium/png-256-thumb/cube-2403569-2010160.png"],
      "border-color": "black",
      "border-width": "2",
      color: "whitesmoke",

    },
  },
  {
    selector: 'node[class = "container"]',
    style: {
      shape: "rectangle",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      // "background-color": "whitesmoke",
      // "border-color": "black",
      // "border-width": "2",
      color: "whitesmoke",
    },
  },
  {
    selector: 'node[class = "image"]',
    style: {
      shape: "star",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      // "border-color": "black",
      // "border-width": "2",
      // color: "whitesmoke",
      color: labelColor,
    },
  },
  {
    selector: 'node[class = "pod"]',
    style: {
      shape: "ellipse",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-image": [podIcon],
      // "background-color": "whitesmoke",
      // "background-image": ["https://cdn.iconscout.com/icon/premium/png-256-thumb/cube-2403569-2010160.png"],
      // "border-color": "black",
      // "border-width": "2",
      // color: "whitesmoke",
      color: labelColor,
    },
  },
  {
    selector: 'node[class = "deployment"]',
    style: {
      shape: "ellipse",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      "background-image": ["https://i.ibb.co/9V5KVmP/icons8-big-parcel-35.png"],
      // color: "whitesmoke",
      color: labelColor,
    },
  },
  {
    selector: 'node[id = "Kubernetes Cluster"]',
    style: {
      shape: "round-heptagon",
      width: "80%",
      height: "80%",
      // "background-image": ["https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_250,h_195/https://assets.ubuntu.com/v1/767f38a4-kubernetes-stacked-color.svg"],
      "font-size": "18",
      "font-family": font,
      content: 'data(label)',
      "text-valign": "center",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "",
      // "background-color": arrowColor,
      "background-color": "whitesmoke",
      // "background-fill": "linear-gradient",
      // "background-gradient-stop-colors": "rgba(87,39,199,1),rgba(98,52,204,1),rgba(123,86,209,1)",
      
      // "background-color": "linear-gradient(180deg, rgba(87,39,199,1) 0%, rgba(98,52,204,1) 49%, rgba(123,86,209,1) 100%)",
      "border-color": borderColor,
      "border-width": "2",
      color: textColor,
    }
  },
  // {
  //   selector: 'node[class = "stateful"]',
  //   style: {
  //     shape: "round-rectangle",
  //     width: "160%",
  //     height: "40%",
  //     "font-size": "15%",
  //     "font-weight": "bold",
  //     content: 'data(label)',
  //     "text-valign": "center",
  //     "text-wrap": "wrap",
  //     "text-max-width": "140",
  //     "background-color": "whitesmoke",
  //     // "border-color": "black",
  //     // "border-width": "2",
  //     color: textColor,
  //   },
  // },
  {
    selector: 'node[class = "stateful"]',
    style: {
      shape: "ellipse",
      width: "60%",
      height: "60%",
      "font-size": "14%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "10%",
      // "background-image": ["https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_250,h_195/https://assets.ubuntu.com/v1/767f38a4-kubernetes-stacked-color.svg"],
      // "background-color": "whitesmoke",
      "background-image": ["https://i.ibb.co/82r4PV9/icons8-database-50.png"],
      "border-color": connectionColor,
      "border-width": "2",
      color: "whitesmoke",
    },
  },
  {
    selector: 'node[class = "service"]',
    style: {
      shape: "ellipse",
      width: "40%",
      height: "40%",
      "font-size": "14%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "10%",
      // "background-image": ["https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_250,h_195/https://assets.ubuntu.com/v1/767f38a4-kubernetes-stacked-color.svg"],
      // "background-color": "whitesmoke",
      "background-image": ["https://i.ibb.co/X5wCv7S/network-Icon.png"],
      "border-color": connectionColor,
      "border-width": "2",
      // color: "whitesmoke",
      color: labelColor,
    },
  },
  {
    selector: 'node[class = "namespace"]',
    style: {
      shape: "round-rectangle",
      width: "150%",
      height: "50%",
      "font-size": "18",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-halign": "center",
      // "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      "border-color": borderColor,
      "border-width": "2",
      color: textColor,
    }
  },
  // {
  //   selector: 'node[class = "replicaSet"]',
  //   style: {
  //     shape: "round-rectangle",
  //     width: "100%",
  //     height: "60%",
  //     "font-size": "14%",
  //     "font-weight": "bold",
  //     "font-family": "#1a1a1a",
  //     content: 'data(label)',
  //     "text-valign": "top",
  //     "text-halign": "left",
  //     "text-wrap": "wrap",
  //     "text-max-width": "140",
  //     "background-image": ["https://i.ibb.co/FwR16DG/cubes64x64.png"],
  //     "background-color": "whitesmoke",
  //     "color": "whitesmoke"
      // "text-background-color": "black",
      // "text-background-opacity": 1,
      // "text-background-shape": "roundrectangle",
      // "text-background-padding": "3px",
  //   },
  // },
  {
    selector: 'node[class = "replicaSet"]',
    style: {
      shape: "ellipse",
      width: "75%",
      height: "75%",
      "font-size": "14%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "bottom",
      "text-halign": "center",
      "text-wrap": "wrap",
      "text-max-width": "10%",
      // "background-image": ["https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_250,h_195/https://assets.ubuntu.com/v1/767f38a4-kubernetes-stacked-color.svg"],
      // "background-color": "whitesmoke",
      "background-image": ["https://i.ibb.co/FwR16DG/cubes64x64.png"],
      "border-color": connectionColor,
      "border-width": "2",
      color: "whitesmoke",
    },
  },
  {
    selector: 'node[class = "ingress"]',
    style: {
      shape: "round-rectangle",
      width: "120%",
      height: "35%",
      "font-size": "10%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      "border-color": "black",
      "border-width": "1",
      color: textColor,
    },
  },
  {
    selector: 'node[class = "policy"]',
    style: {
      shape: "rectangle",
      width: "160%",
      height: "40%",
      "font-size": "10%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "rgb(77, 189, 226)",
      "border-color": "rgb(77, 189, 226)",
      "border-width": "1",
      color: textColor,
    },
  },
  {
    selector: 'node[class = "namespacePolicy"]',
    style: {
      shape: "rectangle",
      width: "120%",
      height: "40%",
      "text-max-width": "120%",
      "font-size": "10%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-valign": "center",
      "text-wrap": "wrap",
      "background-color": "whitesmoke",
      "border-color": "green",
      "border-width": "1",
      color: textColor,
    },
  },
  {
    selector: 'node[class = "allowed"]',
    style: {
      shape: "triangle",
      width: networkPolicyNodeSize,
      height:networkPolicyNodeSize,
      "font-size": "10%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-halign": "center",
      "text-valign": "bottom",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      "border-color": "green",
      "border-width": "1",
      color: textColor,
      "text-background-color": "white",
      "text-background-opacity": 1,
      "text-background-shape": "roundrectangle",
      "text-background-padding": "3px",
      // "source-text-offset": "1em",
      "text-margin-y": "5px"
    },
  },
  {
    selector: 'node[class = "egress"]',
    style: {
      shape: "triangle",
      width:  networkPolicyNodeSize,
      height: networkPolicyNodeSize,
      "font-size": "10%",
      "font-weight": "bold",
      content: 'data(label)',
      "text-halign": "center",
      "text-valign": "bottom",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      "border-color": "green",
      "border-width": "1",
      color: textColor,
      "text-background-color": "white",
      "text-background-opacity": 1,
      "text-background-shape": "roundrectangle",
      "text-background-padding": "3px",
      // "source-text-offset": "1em",
      "text-margin-y": "5px"
    },
  },
  {
    selector: 'node[class = "except"]',
    style: {
      shape: "triangle",
      width: networkPolicyNodeSize,
      height: networkPolicyNodeSize,
      "font-size": "10%",
      content: 'data(label)',
      "text-halign": 'center',
      "text-valign": "bottom",
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": "whitesmoke",
      "border-color": "red",
      "border-width": "1",
      color: textColor,
      "text-background-color": "white",
      "text-background-opacity": 1,
      "text-background-shape": "roundrectangle",
      "text-background-padding": "3px",
      // "source-text-offset": "1em",
      "text-margin-y": "5px"
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
      "line-color": arrowColor,
      "target-arrow-color": arrowColor,
      "font-weight": "bold",
    },
  },
  {
    selector: 'edge[label = "allowed"]',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "1",
      "target-arrow-shape": "triangle",
      "line-color": "green",
      "target-arrow-color": "green",
    },
  },
  {
    selector: 'edge[label = "except"]',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "1",
      "target-arrow-shape": "triangle",
      "line-color": "red",
      "target-arrow-color": "red",
      "font-weight": "bold",
    },
  },
  {
    selector: 'edge[label = "stateful"]',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "3",
      "target-arrow-shape": "triangle",
      "line-color": "orange",
      "target-arrow-color": "orange",
      "font-weight": "bold",
      "line-style": 'dashed'
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
      "line-color": connectionColor,
      "font-weight": "bold",
      "line-style": 'dashed'
    },
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
      "line-color": arrowColor,
      "target-arrow-color": arrowColor,
      "font-weight": "bold",
    },
  },
  {
    selector: 'edge[label = "daemonSet"]',
    style: {
      "curve-style": "bezier",
      color: "blue",
      "text-background-color": "#ffffff",
      "text-background-opacity": 1,
      "text-background-padding": "3",
      width: "2",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "lightblue",
      "line-color": "lightblue",
      "font-weight": "bold",
      // "line-style": 'dashed'
    },
  },
]