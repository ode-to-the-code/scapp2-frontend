


  export function fetchIncidents(){
    return(dispatch) => {
      fetch('http://localhost:3000/api/v1/incidents')
        .then(resp => resp.json())
        .then(incidents => dispatch({
          type: 'FETCH_INCIDENTS',
          payload: incidents
        }))
    }

  }


//
//
//
//  function fetchIncidents() {
//   return (dispatch) => {
//     dispatch({type: "FETCH_INCIDENTS_REQUEST"})
//     fetch('http://localhost:3000/api/v1/incidents')
//       .then(resp => resp.json())
//       .then(incidents =>  dispatch({
//         type: 'FETCH_INCIDENTS_SUCCESS',
//         payload: incidents
//       }))
//       .catch(error => dispatch({type: "FETCH_INCIDENTS_FAIL"}))
//       console.log("payload")
//   }
//
// }

export default fetchIncidents;

//
// export default function fetchIncidents() {
//   return (dispatch) => {
//     fetch('http://localhost3000/api/v1/incidents')
//       .then(resp => resp.json())
//       .then(incidents =>  console.log("incidents fetch....", incidents))
//   }
//
// }
