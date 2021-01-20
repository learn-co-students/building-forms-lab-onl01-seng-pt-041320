import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({type: 'ADD_BAND', payload: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Add Band</label>
          <input type="text" 
          value={this.state.name} 
          onChange={event => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(BandInput)
