


import React from 'react'
import EntriesContainer from '../containers/EntriesContainer'
import EntriesInput from '../components/EntriesInput'


const Incident = (props) => {



  let incident = props.incidents[props.match.params.id - 1]
  console.log("incident........", incident)


  return(
    <div>
      <h2> {incident ? "Incident: " + incident.title : "incident not found"} </h2>
      <EntriesContainer />
      <EntriesInput />

    </div>
  )

}


export default Incident
