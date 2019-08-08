import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import Storefront from "./components/storefront/Storefront"
import Orders from "./components/orders/orders"

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Storefront/>;
                }} />
                <Route exact path="/Orders" render={(props) => {
                    return <Orders/>;
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
