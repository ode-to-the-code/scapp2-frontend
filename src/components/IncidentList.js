
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Incident from './Incident'



const IncidentList = (props) => {
  console.log("props in IncidentList.......", props)
  console.log("props.incidents in IncidentList.......", props.incidents)


  // function listOrNot() {
  //   if (props.incidents.length > 0) {
  //     return {props.incidents.map(incident =>
  //       <li key={incident.id}> {incident.title} </li>
  //     )}
  //   }
  //   else {
  //     console.log("mapping problems in IncidentList")
  //   }
  // }



  return(
    <div>
        {props.incidents.map(incident =>
          <div key={incident.id}>
            <Link to={`/incidents/${incident.id}`}> {incident.title} </Link>
          </div>
        )}
    </div>
  )

}


export default IncidentList;
