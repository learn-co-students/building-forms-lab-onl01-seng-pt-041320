// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <input type="text" onChange={(event) => this.handleChange(event)} placeholder="Band Name" value={this.state.name} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({type: 'ADD_BAND', payload: formData })
// })

// export default connect(null, mapDispatchToProps)(BandInput);
export default BandInput;
