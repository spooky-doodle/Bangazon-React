import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import Storefront from "./components/storefront/Storefront";

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Storefront {...props}/>;
                }} />

                <Route exact path="/products/:id" render={(props) => {
                    return <detailView {...props}/>;
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
