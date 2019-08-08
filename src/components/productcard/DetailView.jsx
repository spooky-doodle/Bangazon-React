import React, { Component } from 'react'
import ProdImg from "../../img/productImage01.png";
import "../../styles/card.css";
import {Card, Image, Button} from "semantic-ui-react";
import {Products} from '../../modules/Endpoints.jsx';


export default class DetailView extends Component {
    state = {
        product: {
            title: "",
            description: "",
            price: "-",
            quantity: "-"
        }
    };

    componentDidMount() {
        Products.getOne(`${this.props.id}`)
        .then((product) => this.setState({product}));
    }


    render() {
        return (
            
            <Card raised centered fluid style={{maxWidth: '40vw', marginTop: '5vh'}}>
                <div >
                    <Image src={ProdImg} alt='product-img'></Image>
                </div>
                <Card.Content >
                    <h2>{this.state.product.title}</h2>
                    <p>{this.state.product.description}</p>
                    <p>$ {this.state.product.price}</p>
                    <p>Qty: {this.state.product.quantity}</p>
                </Card.Content>
            </Card>
        )
    }
}
