import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from 'react-router-dom';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/nav/Navbar'
import ApplicationViews from './ApplicationViews';

class Bangazon extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ApplicationViews />
            </div>
        )
    }
}

export default withRouter(Bangazon)
