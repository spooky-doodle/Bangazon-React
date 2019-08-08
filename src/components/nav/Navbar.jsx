import React, { Component } from 'react'
import { Menu, Dropdown, Container, Image } from 'semantic-ui-react'
import './navbar.css'
import bangazonLogo from "../../img/bangazon_logo.svg";

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Menu borderless size='massive' inverted fixed='top' color="black" style={{ minHeight: 80 }}>
                    <Container>
                        <Menu.Item className="nav-logo-container">
                            <Image src={bangazonLogo} id="bang-logo"></Image>
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Dropdown item simple text='Select Data'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as='a' href='/'>
                                        Item 1
                                    </Dropdown.Item>
                                    <DropdownItem as='a' href='/Orders'>
                                        Orders
                                    </DropdownItem>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}
