

export default function fetchIncidents() {
  return (dispatch) => {
    fetch('http://localhost3000/api/v1/incidents')
      .then(resp => resp.json())
      .then(incidents =>  dispatch({
        type: 'FETCH_INCIDENTS',
        payload: incidents
      }))
  }

}
