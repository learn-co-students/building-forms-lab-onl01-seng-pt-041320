// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
  }

  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
                        type="text"
                        name="name"
                        onChange={(event) => this.handleOnChange(event)}
                        value={this.state.name}
                      />
         <button type="submit" className="btn btn-default">Submit</button>
         </form>
        </div>
    )
  }
}

export default BandInput
