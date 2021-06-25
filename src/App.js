
import React from 'react';
import {connect} from 'react-redux';
import IncidentsContainer from './containers/IncidentsContainer.js'


class App extends React.Component {


  componentDidMount(){
    fetch('http://localhost:3000/api/v1/incidents/1/entries')
      .then(response => response.json())
      .then(data => console.log(data))
  }




  render() {
  return (
    <div className="App">
      <IncidentsContainer />
    </div>
  );

    }
}

export default connect(null)(App);
