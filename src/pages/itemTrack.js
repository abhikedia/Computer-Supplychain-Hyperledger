import React, { Component } from 'react';
import '../css/itemTrack.css'
import { Checkbox, Container } from 'semantic-ui-react'


const imgMyimageexample = require('../MAP-01-01.jpg');
const divStyle = {
    width: '100%',
    height: '1200px',
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: 'cover'
};
class Itemtrack extends Component {

    state = {}
    render() {
        return (
            <div className="cComponent" style={divStyle} >
                <div>
                    <p>TRACK THE PRODUCT</p>
                </div>
                <Container className="cont">

                    <Checkbox label='Make my profile visible' id="check1" />
                    <Checkbox label='Make my profile visible' id="check2" />
                    <Checkbox label='Make my profile visible' id="check3" />
                    <Checkbox label='Make my profile visible' id="check4" />

                </Container>
            </div>
        );
    }
}

export default Itemtrack;