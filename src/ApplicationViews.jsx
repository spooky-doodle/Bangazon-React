import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import Storefront from "./components/storefront/Storefront";
import Employee from "./components/employees/Employee"
import DetailView from "./components/productcard/DetailView";
import {Products, Orders, Customers, Employees} from './modules/Endpoints.jsx';

import { CustomerList } from "./components/customers/CustomerList";
import { CustomerDetail } from "./components/customers/CustomerDetail";

class ApplicationViews extends Component {

    state = {
        products: [],
    };

    async componentDidMount() {
        Products.getAll()
        .then((products) => this.setState({products}));
    }

    

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Storefront {...props} products={this.state.products} />;
                }} />
                <Route exact path="/products/:id(\d+)" render={(props) => {
                    return <DetailView {...props} id={parseInt(props.match.params.id)}/>;
                }} />
                <Route exact path="/customers" render={(props) => {
                    return <CustomerList {...props}/>;
                }} />
                <Route exact path="/customers/:custId(\d+)" render={(props) => {
                    return <CustomerDetail id={parseInt(props.match.params.custId)} {...props}/>;
                }} />
                

                <Route exact path="/employees" render={(props) => {
                    return <Employee/>;
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
