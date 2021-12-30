import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartElement = ( {product} ) => {
    const { removeItem } = useContext(CartContext);
    const {id, name, price, quantity} = product

    const deleteItem = () => {
        removeItem(id);
    }

    return (
        <div className='row'>
            <div className='col'>
                {name}
            </div>
            <div className='col'>
                ${price}
            </div>
            <div className='col'>
                {quantity}
            </div>
            <div className='col'>
                ${price * quantity}
            </div>
            <div className='col'>
            <button className ='btn btn-danger' onClick={deleteItem}>X</button>
            </div>
        </div>
);
}
 
export default CartElement;