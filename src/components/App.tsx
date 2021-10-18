import * as React from "react";
import ClusterView from './views/ClusterView';
import NodeView from "./views/NodeView";
import {kObject} from "../kObjects/kObject"
import * as kObjects from "../kObjects/__index";
import * as dataParser from "../component_data/kDataParser";

function App() {
  let kObjArray: kObject[] = [];
  const [dataProp, SetDataProp] = React.useState<kObject[]>([]);
  const [nodeViewPage, setNodeViewPage] = React.useState(false);
  const [view, setView] = React.useState('Cluster View')
  const [masterNode, setMasterNode] = React.useState("Kubernetes Cluster")
  const [namespace, setNamespace] = React.useState("Kubernetes Cluster")
  
  const deploymentStatus: any[] = [];
  const [deploymentStat, setDeployment] = React.useState<typeof kObjArray | undefined>([]);

  const podDeployments: any[] = [];
  const [podDeployInfo, getPodDeploys] = React.useState<typeof kObjArray | undefined>([]);
  React.useEffect(getData, []);
  React.useEffect(fetchPodDeployment, [])
  React.useEffect(fetchLiveData, []);
  
  //fetch data from backend, push to kDeployArray
  function getData(): void {
    fetch('http://localhost:3000/getData')
      .then((data: Response) => data.json())
      .then((data: any[]) => {
        // Data will be an array of objects. Each object represents a different YAML file.
        parseData(data);
      })
      .catch((error) => console.log('GET /getData response error: ', error));
  }

  function fetchLiveData(): void {
    fetch('http://localhost:3000/statusConditions')
      .then((data: Response) => data.json())
      .then((data: string[]) => {
        data.forEach((data: string) => {
          deploymentStatus.push(data);
        })
        setDeployment(deploymentStatus)
      })
    .catch((error) => console.log('GET /statusConditions response error: ', error));
  }

  function fetchPodDeployment(): void {
    fetch('http://localhost:3000/getLiveDeploymentData')
      .then((data: any) => data.json())
      .then((data: any) => {
        data.forEach((data: any) => {
          podDeployments.push(data);
        })
        getPodDeploys(podDeployments)
      })
    .catch((error) => console.log('GET /getLiveDeploymentData response error: ', error));
  }

  function parseData(relevantData: kObject[]) 
  {
    const data = dataParser.parseData(relevantData);
    SetDataProp(data)
  }

  return( !nodeViewPage ? 
    <div className="Tabs">
      <div className="ClusterView">
        <ClusterView 
        trigger={nodeViewPage}
        setTrigger={setNodeViewPage}
        dataArray={dataProp}
        deploymentStatus={deploymentStat}
        masterNode={masterNode}
        setMasterNode={setMasterNode}
        namespace={namespace}
        setNamespace={setNamespace}
        view={view}
        setView={setView}
        />
      </div>
      
    </div> 
    : 
    <div>
    <NodeView
        trigger={nodeViewPage}
        setTrigger={setNodeViewPage}
        dataArray={dataProp}
        masterNode={masterNode}
        setMasterNode={setMasterNode}
        namespace={namespace}
        podDeployments = {podDeployInfo}
        setNamespace={setNamespace}
        view={view}
        setView={setView}
      />
    </div>
  )
}

export default App;