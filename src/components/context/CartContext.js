import React, { useState } from 'react';

const Context = React.createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        return cart.some(e => parseInt(e.id) === parseInt(itemId));
    };

    const clear = () =>{
        setCart([]);
    };

    const addItem = (product, quantity = 1) => {
        
        if (isInCart(product.id) !== true ) {
            const itemToAdd = {
                ...product,
                quantity: quantity
            }
    
            setCart([...cart, itemToAdd])
        }
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter((element) => parseInt(element.id) !== parseInt(itemId))
        
        setCart(newCart)
    };

    const getTotalPrice = () => {
        let counter = 0;
        cart.forEach( element => {
            counter = counter + (parseInt(element.price) * parseInt(element.quantity))
        })
        return counter
    }

    const getTotalProduct = () => {
        let counter = 0;
        cart.forEach( element => counter = counter +  parseInt(element.quantity))
        console.log(counter + ' totalproduct')
        return counter
    }

    return (
        <Context.Provider value={{
            cart, addItem, removeItem, clear, isInCart, getTotalPrice, getTotalProduct
        }}>
            {children}
        </Context.Provider>
    )
};

export default Context;