import React, { Component } from 'react'
import ProdImg from "../../img/productImage01.png";
import "../../styles/card.css";
import {Card, Image, Button} from "semantic-ui-react";


export default class ProductCard extends Component {

    viewProductDetail = () => {
        this.props.history.push(`/products/${this.props.product.id}`);
    }


    render() {
        return (
            <Card >
                <div >
                    <Image src={ProdImg} alt='product-img'></Image>
                </div>
                <Card.Content >
                    <h2>{this.props.product.title}</h2>
                    <p>{this.props.product.description}</p>
                    <p>$ {this.props.product.price}</p>
                    <p>Qty: {this.props.product.quantity}</p>
                    <Button onClick={this.viewProductDetail}>View Details</Button>
                </Card.Content>
            </Card>
        )
    }
}
