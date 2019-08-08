import React from 'react'

export default function OrderProductLineItem(props) {
    return (
        <>
        <p>{props.num}: {props.product.title} - {props.product.description}</p>
        <p>Price: {props.product.price}</p>
        <hr/>
        </>
    )
}
