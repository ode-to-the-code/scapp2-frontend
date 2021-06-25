

import React
import {connect} from 'react-redux';
import {fetchIncidents} from './actions/actions'

componentDidMount() {
  fetch('http:localhost3000/api/v1/incidents')
    .then(res => res.json())
    .then(data => console.log(data))
}



export default connect(null, {fetchIncidents})
