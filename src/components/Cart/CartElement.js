import React from 'react';


const CartElement = ( {product} ) => {
    
    const {name, price, quantity} = product
    return (
        <tr>
            <th>{name}</th>
            <th>{price}</th>
            <th>{quantity}</th>
        </tr>
    );
}
 
export default CartElement;