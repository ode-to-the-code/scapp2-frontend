

export default function incidentReducer(state={incidents: []}, action)  {

  switch (action.type) {
    case "FETCH_INCIDENTS":
      return {incidents: action.payload};
    default:
      console.log("oops")
      return state;
  }
  // return state;


}
