import React from 'react';
import { Link } from 'react-router-dom';

const ButtonCount = ({ onConfirm }) => {

    return (
        <div>
            <Link to={'/cart'}>
                <button className='btn btn-outline-primary'>
                    Ir al carrito 
                </button> 
            </Link>
        </div>
    );
}
 
export default ButtonCount;