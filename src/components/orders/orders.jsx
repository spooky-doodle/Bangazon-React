import React, { Component } from 'react'
import OrderCard from "./ordersCard";
import {Products, Orders, Customers, Employees} from '../../modules/Endpoints';
import { Container, Card } from "semantic-ui-react";


export default class OrderView extends Component {
    state = {
        orders: [],
        ordersReady: false,
        totalPrice: 0
    };

    async componentDidMount() {
        let total = 0
       await Orders.getAll()
       .then((orders) => 
       {this.setState({ orders: orders }, () => {
           this.setState({ordersReady: true})
       })
    }
       )};

    render() {
        return (
            <Container textAlign="center" style={{paddingTop : "20px"}}>
            <h1>Summary Of Orders</h1>
                <Card.Group>
                    {this.state.ordersReady ? 
                        this.state.orders.map(order => {
                            return <OrderCard order={order} totalPrice={this.state.totalPrice} key={order.id}/>
                        })
                     : null}
                </Card.Group>
            </Container>
        )
    }
}
