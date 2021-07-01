import React from 'react';
import {connect}  from 'react-redux';
import {addIncident} from '../actions/addIncident'


class IncidentInput extends React.Component {


  state = {title: ""}


  handleChange = (event) => {
    // debugger;
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    // debugger;
    event.preventDefault()
    this.props.addIncident(this.state)
    this.setState({
      title: ''
    })
  }


  render(){
    return(
      <div>
        incident input
        <form onSubmit={this.handleSubmit}>
          <label>Describe the setting </label>
          <input type="text" placeholder="e.g., went to buy a car" name="title" value={this.state.title} onChange={this.handleChange}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


// export default IncidentInput;
export default connect(null, {addIncident})(IncidentInput)
