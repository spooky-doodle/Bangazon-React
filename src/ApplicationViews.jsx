import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import Storefront from "./components/storefront/Storefront";
import Employee from "./components/employees/Employee"

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Storefront/>;
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <Employee/>;
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
