import React, { Component } from 'react'

class BandInput extends Component {
// has an initial state with text key set to empty string
  state = {
    name: ''
  }

  handleOnChange = e => {
    // changes the local state on input change
      this.setState({
      name: e.target.value}
  )}
  

    handleOnSubmit = e => {
      e.preventDefault()
      this.props.addBand(this.state) 
      this.setState({
        name: ''
      })
  }
  
    render() {
      return(
        <div>
          <form onSubmit={(e) => this.handleOnSubmit(e)}>
            <input type="text" value={this.state.name} onChange={(e )=> this.handleOnChange(e)}/>
          <input type="submit" />
          </form>
        </div>
      )
    }
  }

  export default BandInput
