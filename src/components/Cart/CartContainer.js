import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartElement from './CartElement';

const CartContainer = () => {

    const { cart, clear, getTotalPrice} = useContext(CartContext);

    /* const buyerItem = {
        buyer:{
            name:'',
            phone:'',
            email:''
        },
        items:[
            {
                item: '',
                title: '',
                price: ''
            }
        ]
    } */

    return (
        <Fragment>
            <h4>Carro de compras</h4>
            {cart.length === 0
            ?   
            <div className='container justify-content-center'>
                <p>Carrito vacio, no se agregaron articulos</p>
                <Link to={'/'} className='btn btn-primary' >Volver al inicio</Link>
            </div>
            :
            <div className='container'>
                <div className="container justify-content-center">
                    <div className='row'>
                        <div className='col'>
                            Producto
                        </div>
                        <div className='col'>
                            Precio por unidad
                        </div>
                        <div className='col'>
                            Cantidad
                        </div>
                        <div className='col'>
                            Total parcial
                        </div>
                        <div className='col'>
                            
                        </div>
                    </div>
                
                    {cart.map((product)=> <CartElement key={product.id} product={product} />)}
                </div>

                <h5>Total: ${getTotalPrice()}</h5>
                <div className='d-flex justify-content-center'>
                    <button onClick={clear}>Cancelar compra</button>
                    <button >Continuar compra</button>
                </div>
            </div>
            }
            
        </Fragment>
    );
}
 
export default CartContainer;