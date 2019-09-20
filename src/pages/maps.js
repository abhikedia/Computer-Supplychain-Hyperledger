import React, { Component } from 'react';
import '../css/maps.css';

const imgMyimageexample = require('../MAP-01-01.jpg');
const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: 'cover',
};
class Maps extends Component {
    state = {}
    render() {
        return (
            <div className="cComponent" style={divStyle} >
                <h1 align="center"></h1>
            </div>
        );
    }
}

export default Maps;