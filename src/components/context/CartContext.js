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
        
        if (isInCart(product.id) !== true) {
            const itemToAdd = {
                ...product,
                quantity: quantity
            }
    
            setCart([...cart, itemToAdd])
        }
    };

    const removeItem = (itemId) => {
        if(itemId !== ''){
            setCart(cart.filter((element) => {
                return element !== itemId
                })
            )
        } else{
            console.log('Id del elemento incorrecto')
        }
    };

    return (
        <Context.Provider value={{
            cart, addItem, removeItem, clear, isInCart
        }}>
            {children}
        </Context.Provider>
    )
};

export default Context;