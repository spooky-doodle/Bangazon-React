import React, { Component } from 'react'
import ProductCard from "../productcard/ProductCard";
import {Container, Card, Button} from "semantic-ui-react";

export default class Storefront extends Component {
    

    // className='products-container'
    render() {
        return (
            <Container centered="true" style={{maxWidth: '960px'}} >
                <Card.Group centered  style={{marginTop: '20px'}}>
                    {
                        this.props.products ? 
                        this.props.products.map(prod => {
                            return <ProductCard product={prod} key={prod.id} {...this.props} />
                        })
                        : <> </>
                    }
                </Card.Group>
                
            </Container>
        )
    }
}
