import React, { Component } from 'react';
import Navbar from '../components/navbar'
import { Grid, Image, Container, Input } from 'semantic-ui-react'
import '../css/checkpoint.css'

class Dealers extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <h1 className="prope">DEALERS</h1>
                </div>
                <div className="maincss">
                    <Grid centered className="orient" >
                        <Grid.Row className="non" ></Grid.Row>
                        <Grid.Column width={13}>
                            <p>SERIAL NUMBER</p>
                            <Input ref='sn' id="sn" icon='barcode' placeholder='SERIAL NUMBER' className="icon" focus />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );

    }
}

export default Dealers;