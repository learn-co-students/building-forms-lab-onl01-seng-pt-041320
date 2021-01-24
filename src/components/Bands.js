import React from "react";


// export default BandsContainer;

const Bands = props => {
    const bands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>
    })
        
    return (<div>{bands}</div>)
 }

export default Bands;