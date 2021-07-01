
import React from 'react';
import {connect} from 'react-redux';
import IncidentsContainer from './containers/IncidentsContainer.js';
import IncidentList from './components/IncidentList';
import IncidentInput from './components/IncidentInput';
import Entries from './components/Entries';

// import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component {

  //
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/incidents/1/entries')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }



//
//   render() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Route path="/" exact component={IncidentsContainer} />
//       <Route path="/incidents" exact component={IncidentList} />
//       <Route path="/form" exact component={IncidentInput} />
//       <Route path="/entries/:id" exact component={Entries} />
//     </div>
//
//     </BrowserRouter>
//
//   );
//
//     }
// }



  render() {
  return (
    <div className="App">
      <IncidentsContainer/>
    </div>

  );

    }
}
export default connect(null)(App);
