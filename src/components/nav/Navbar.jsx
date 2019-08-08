import React, { Component } from 'react'
import { Menu, Dropdown, Container, Button, Label } from 'semantic-ui-react'
import './navbar.css'
import { LoginModal  } from '../LoginModal';
import { withRouter } from "react-router"

class Navbar extends Component {

    state = {
        signinHover: false,
        isModalVisible: false
    }

    hide = () => {
        this.setState({isModalVisible: false});
    }



    render() {
        return (
            <div className='navbar'>
                <Menu borderless size='massive' inverted fixed='top' color="black" style={{ minHeight: 80 }}>
                    <Container>
                        <Menu.Item as='a' onClick={() => this.props.history.push("/")} className='logo-name'>
                            Bangazon
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Dropdown item simple text='Select Data'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as='a' href='/'>
                                            Item 1
                                        </Dropdown.Item>
                                        <Dropdown.Item as='a' onClick={() => this.props.history.push("/customers")}>
                                            Customers
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item 
                                icon="sign-in" 
                                active={this.state.signinHover}
                                style={{cursor: 'pointer'}}
                                onMouseEnter={()=> this.setState({signinHover: true})}
                                onMouseLeave={()=> this.setState({signinHover: false})}
                                onClick={() => { this.setState({isModalVisible: true}) }}

                            />
                        </Menu.Menu>
                    </Container>
                </Menu>
                <LoginModal isVisible={this.state.isModalVisible} hide={this.hide}/>


            </div>
        )
    }
}

export default withRouter(Navbar);