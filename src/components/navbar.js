import React, { Component } from 'react';
import '../css/navbar.css';
import { Menu, Segment } from 'semantic-ui-react';



class Navbar extends Component {
    state = {}

    render() {
        return (
            <div>
                <Segment inverted>

                    <Menu inverted secondary className="headSegment">
                        <Menu.Item>
                            <img src=''
                            />
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