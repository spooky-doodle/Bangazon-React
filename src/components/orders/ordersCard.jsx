import React, { Component } from 'react'
import ProdImg from "../../img/productImage01.png";
import "../../styles/card.css";
import {Container, Card, CardGroup, CardContent} from "semantic-ui-react"
import OrderProductLineItem from "./orderProductLineItem"


export default class OrderCard extends Component {
state = {
    totalPrice: null
}
componentDidMount() {
        var total = 0;
        this.props.order.products.forEach(product => total = total + product.price)
        this.setState({totalPrice: total})
    }
    render() {
        return (
            <Card>                
                <CardContent>
                    <h2>Customer ID - {this.props.order.customerId}</h2>
                    <p>Payment Type Id - {this.props.order.paymentTypeId}</p>
                    <hr />
                    {
                        this.props.order.products.map((product, index) => {
                            return <OrderProductLineItem product={product} num={index+1} key={index+1}/>
                        })
                    }
                   <p>Total Price: ${this.state.totalPrice}</p>
                </CardContent>
            </Card>
        )
    }
}
