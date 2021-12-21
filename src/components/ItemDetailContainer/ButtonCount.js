import React from 'react';
import { Link } from 'react-router-dom';

const ButtonCount = ({ onConfirm }) => {

    return (
        <div>
            <Link to={'/cart'}>
                Ir al carrito 
            </Link>
        </div>
    );
}
 
export default ButtonCount;