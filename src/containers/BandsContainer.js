import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  addBand = (band) => {
    this.props.addBand(band)
  }

  render() {
    debugger
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.addBand} />
     
        <ul>
        {this.props.bands.map((band) => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => ({
  addBand: (band) => dispatch({type: 'ADD_BAND', payload: band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
