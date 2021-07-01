
import React from 'react';
import {connect} from 'react-redux';

import IncidentList from '../components/IncidentList'
import IncidentInput from '../components/IncidentInput'
import Incident from '../components/Incident'

import {Route, Switch} from 'react-router-dom';
import fetchIncidents from '../actions/fetchIncidents'



class IncidentsContainer extends React.Component {
  // debugger;


  componentDidMount(){
    this.props.fetchIncidents()
  }




  render(){

    return(
      <div>
        <Switch>
          <Route path='/incidents/new' component={IncidentInput} />
          <Route path='/incidents/:id' render={(routerProps) => <Incident {...routerProps} incidents={this.props.incidents} />}  />
          <Route path='/incidents' render={(routerProps) => <IncidentList {...routerProps} incidents={this.props.incidents} />}  />
        </Switch>
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
