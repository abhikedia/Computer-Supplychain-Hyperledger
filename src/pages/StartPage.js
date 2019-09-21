import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Grid, Image, Container } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button, Icon, Divider } from 'semantic-ui-react'
import '../css/startpage.css';

const imgMyimageexample = require('../1-01.jpg');
const divStyle = {
    width: '100%',
    height: '1200px',
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: 'cover'
};

class StartPage extends Component {
    state = {}
    render() {
        return (
            <div className="cComponent" style={divStyle}>
                <Button className="button4" content='DIVE IN' type="submit" />
            </div>
        );
    }
}

export default StartPage;