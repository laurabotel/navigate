import { HtmlTagObject } from "html-webpack-plugin";
import * as React from "react";
import kDeploymentLive from '../../../server/kDeploymentLive';
import kPodLive from '../../../server/kPodLive'
import PodInfoInNodeView from './PodInfoInNodeView';

function SidebarNodeView(props: any) {
  const deployObjs = props.podDeployments;
  const podObjs = props.podInfoObjects;
  console.log("please worksies: ", props.podInfoObjects)
  console.log('Hemwatie, youre looking for  this: ', props.clickedPod)
  let [displayPod, rerenderPodInfo] = React.useState<any>([]);

  // Display specific pod  information
  podObjs.forEach((ele: kPodLive) => {
    if(ele.name.split('-')[0] === props.clickedPod){
      console.log('plsfuckingdisplayconditional my guy')
      displayPod.push(<h1>hello</h1>)
      rerenderPodInfo(displayPod)
    }
  })

  // Displaying deployment information
  const deploymentMain: any = [];
  deployObjs.forEach((ele: kDeploymentLive) => {
    if(ele.name === props.masterNode){
      deploymentMain.push(
        <div>
          <table>
            <tbody>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr><td>Name:</td><td>{ele.name}</td></tr>
              <tr><td>Kind:</td><td>{ele.kind}</td></tr>
              <tr><td>Namespace:</td><td>{ele.namespace}</td></tr>
              <tr><td>Created at:</td><td>{ele.created}</td></tr>
              <tr><td>Environment Variables:</td><td><table>
                <tbody>
                  <tr>
                  <th>Name</th>
                  <th>Value</th>
                  </tr>
                  <tr>
                    <td>{ele.env[0].name}</td>
                    <td>{ele.env[0].value}</td>
                  </tr>
                </tbody>
                </table></td></tr>
              <tr><td>Resource Version:</td><td>{ele.resourceVersion}</td></tr>
              <tr><td>Restart Policy:</td><td>{ele.restartPolicy}</td></tr>
              <tr><td>Strategy Type:</td><td>{ele.strategyType}</td></tr>
              <tr><td>Max Surge:</td><td>{ele.rollingUpdateMaxSurge}</td></tr>
              <tr><td>Max Unavailable:</td><td>{ele.rollingUpdateMaxUnavailable}</td></tr>
              <tr><td>Scheduler Name:</td><td>{ele.schedulerName}</td></tr>
              <tr><td>UID:</td><td>{ele.uid}</td></tr>
            </tbody>
          </table>
        </div>
      )
    }
  })

  
  
  return props.clickedPod === undefined ? (
    <div>
      {deploymentMain}
    </div>
  ) : (
    <div>
      <PodInfoInNodeView />
  </div>
  )
}

export default SidebarNodeView;