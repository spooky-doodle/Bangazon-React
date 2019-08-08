import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import Storefront from "./components/storefront/Storefront";

import { CustomerList } from "./components/customers/CustomerList";
import { CustomerDetail } from "./components/customers/CustomerDetail";

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Storefront {...props}/>;
                }} />
                <Route exact path="/customers" render={(props) => {
                    return <CustomerList {...props}/>;
                }} />
                <Route exact path="/customers/:custId(\d+)" render={(props) => {
                    return <CustomerDetail id={parseInt(props.match.params.custId)} {...props}/>;
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
