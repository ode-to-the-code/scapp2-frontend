

// export default function incidentReducer(state={incidents: []}, action)  {
//
//   console.log("action.type", action.type)
//   console.log("action", action)

  //
  // switch (action.type) {
  //   case "FETCH_INCIDENTS_REQUEST":
  //     return {...state, loading: true}
  //   case "FETCH_INCIDENTS_SUCCESS":
  //     return {...state, incidents: action.payload, loading: false};
  //   case "FETCH_INCIDENTS_FAIL":
  //     return {...state, error: "couldn't fetch the incidents", loading: false}
  //   case "ADD_INCIDENT":
  //   console.log("add incident case")
  //
  //     return {...state, incidents: [...state.incidents, action.payload]  }
  //   default:
  //     console.log("oops")
  //     return state;
  // }
  // return state;
// }



  export default function incidentReducer(state = {incidents: []}, action) {
    console.log("action log in reducer", action)
    switch (action.type) {
      case 'FETCH_INCIDENTS':
      console.log("fetch incidents case a.p.......", action.payload)

        return {incidents: action.payload}
      case 'ADD_INCIDENT':
        return {...state, incidents: [...state.incidents, action.payload]}
      default:
        return state
    }



}
