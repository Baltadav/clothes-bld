import React, { Fragment, useContext } from 'react';
import CartContext from '../context/CartContext';
import CartElement from './CartElement';

const CartContainer = () => {

    const { cart, clear } = useContext(CartContext);

    return ( 
        <Fragment>
            <p>Desde cart</p>
            
            <table bgcolor="#C0C0C0">
                <tr>
                    <th>Nombre del producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
                {cart.map((product)=> <CartElement key={product.id} product={product}/>)}
            </table>
                
            
            <button onClick={clear}>Limpiar carrito</button>
        </Fragment>
    );
}
 
export default CartContainer;