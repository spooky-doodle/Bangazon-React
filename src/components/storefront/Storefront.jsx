import React, { Component } from 'react'
import ProductCard from "../productcard/ProductCard";
import {Products, Orders, Customers, Employees} from '../../modules/Endpoints';

export default class Storefront extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        console.log(await Products.getAll());
        console.log(await Employees.getAll());
        console.log(await Orders.getAll());
        console.log(await Customers.getAll());
        Products.getAll()
       .then((products) => this.setState({products}));
    }

    render() {
        return (
            <div className='storefront-container'>
                <div className='products-container'>
                    {
                        this.state.products.map(prod => {
                            return <ProductCard product={prod} key={prod.id}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
