import React, { Component } from 'react'
import ProductCard from "../productcard/ProductCard";
import { withRouter } from "react-router"
import { Route, Redirect, withRouter as router2 } from "react-router-dom"
import {Products, Orders, Customers, Employees} from '../../modules/Endpoints';
import {Container, Card, Button} from "semantic-ui-react";

export default class Storefront extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        Products.getAll()
        .then((products) => this.setState({products}));
    }

    // className='products-container'
    render() {
        return (
            <Container centered style={{maxWidth: '960px'}} >
                <Card.Group  centered style={{marginTop: '20px'}}>
                    {
                        this.state.products.map(prod => {
                            return <ProductCard product={prod} key={prod.id} />
                        })
                    }
                </Card.Group>
                
            </Container>
        )
    }
}
