import React, { Component } from 'react'
import ProdImg from "../../img/productImage01.png";
import "../../styles/card.css";


export default class ProductCard extends Component {
    render() {
        return (
            <div className='card-container' >
                <div className='product-card-img'>
                    <img src={ProdImg} alt='product-img' className="img-actual"></img>
                </div>
                <div className='product-card-txt'>
                    <h2>{this.props.product.title}</h2>
                    <p>{this.props.product.description}</p>
                    <p>$ {this.props.product.price}</p>
                    <p>Qty: {this.props.product.quantity}</p>
                    
                </div>
            </div>
        )
    }
}
