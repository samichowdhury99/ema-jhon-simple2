import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total  = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 0){
        shipping = 13.00;
    }
    else if (total > 35) {
        shipping = 0;
    }
    else if(total > 15){
        shipping = 5.00;
    }
    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>This is Cart</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p><small>Product Price: {formatNumber(total)}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;