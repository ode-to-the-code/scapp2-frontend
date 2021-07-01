
import React from 'react';




export const addIncident = (data) => {
  // debugger;
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/incidents', {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

  .then(resp => resp.json())
  .then(incident => dispatch({type: 'ADD_INCIDENT', payload: incident}))
  }
}
