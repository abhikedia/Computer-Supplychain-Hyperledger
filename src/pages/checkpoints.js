import React, { Component } from 'react';
import Navbar from '../components/navbar'
import { Grid, Image, Container, Input } from 'semantic-ui-react'

class Checkpoint extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <div className="maincss">
                    <Grid centered className="orient" >
                        <Grid.Row className="non" ></Grid.Row>
                        <Grid.Column width={1} >
                            <Image src='data:image/png;base64,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' size='medium' circular />
                        </Grid.Column>
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

export default Checkpoint;