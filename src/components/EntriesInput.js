

import React from 'react';


class EntriesInput extends React.Component {


  state = {title: ""}


  handleChange = (event) => {
    // debugger;
    this.setState({
    [event.target.name]: event.target.value
    })
  }



  render(){
    return(
      <div>
        incident input
        <form >
          <label>Describe the setting </label>
          <input type="text" placeholder="e.g., went to buy a car" name="situation" value={this.state.title} onChange={this.handleChange}/><br/>

          <label>Describe the setting </label>
          <input type="text" placeholder="e.g., went to buy a car" name="selftalk" value={this.state.selftalk} onChange={this.handleChange}/><br/>

          <label>Describe the setting </label>
          <input type="text" placeholder="e.g., went to buy a car" name="friendresponse"
          value={this.state.friendresponse} onChange={this.handleChange}/><br/>
        </form>
      </div>
    )
  }
}


export default EntriesInput;
