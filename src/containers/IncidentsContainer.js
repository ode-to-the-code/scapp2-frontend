
import React from 'react';
import {connect} from 'react-redux';

import IncidentList from '../components/IncidentList'
import IncidentInput from '../components/IncidentInput'
import fetchIncidents from '../actions/fetchIncidents'



class IncidentsContainer extends React.Component {


  componentDidMount(){
    this.props.fetchIncidents()
  }




  render(){
    return(
      <div>
        <IncidentList incidents={this.props.incidents}/>
        <IncidentInput />
      </div>
    )
  }


}


  const mapStateToProps = state => {
    return {
      incidents: state.incidents
    }
  }


export default connect(mapStateToProps, {fetchIncidents})(IncidentsContainer)
