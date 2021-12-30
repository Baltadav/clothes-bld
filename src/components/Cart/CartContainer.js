import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartElement from './CartElement';
import {  getFirestore, addDoc, Timestamp, collection } from "firebase/firestore";
//import * as firebase from 'firebase/app'

const CartContainer = () => {

    const { cart, clear, getTotalPrice} = useContext(CartContext);

    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        setUserInfo({
            name: 'Juan',
            lastName:'del Pilar',
            email: 'jaunchito@delpili.com'
        })
    }, [])
    const handleClick = () => {

        const newOrder = {
            buyer: userInfo,
            items: cart,
            total: getTotalPrice(),
            date: Timestamp.fromDate( new Date())
        }

        const db = getFirestore();
        addDoc(collection(db, "orders"), newOrder);
        console.log('Registro ok');
        clear();
        console.log('carrito en 0');
    }

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
                    <Link to='/'>
                        <button onClick={handleClick} >Continuar compra</button>
                    </Link>
                    
                </div>
            </div>
            }
            
        </Fragment>
    );
}
 
export default CartContainer;