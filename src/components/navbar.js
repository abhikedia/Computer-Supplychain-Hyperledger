import React, { Component } from 'react';
import '../css/navbar.css';
import { Menu, Segment } from 'semantic-ui-react';

const imgMyimageexample = require('../LOGGGG-03.jpg');
const divStyle = {
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: 'cover',
};
class Navbar extends Component {
    state = {}

    render() {
        return (
            <div>
                <Segment inverted>

                    <Menu inverted secondary className="headSegment">
                        <Menu.Item className="logo">
                            <h1 class="boldi">Verify</h1>
                        </Menu.Item>

                        <Menu.Item
                            name='HOME' className="item1"
                        />
                        <Menu.Item
                            name='ABOUT US' className="item2"
                        />
                        <Menu.Item
                            name='CONTACT US' className="item2"
                        />
                    </Menu>
                </Segment>
            </div>

        );
    }
}

export default Navbar;