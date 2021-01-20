import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={addBand} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: () => {
      dispatch(addBand())
    }
  }
}

export default connect(null, mapDispatchToProps)(BandsContainer)
