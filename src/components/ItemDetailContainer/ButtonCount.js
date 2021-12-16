import React from 'react';
import { Link } from 'react-router-dom';

const ButtonCount = ({ onConfirm }) => {

    return (
        <div>
            <Link to={'/cart'}>
                <button onClick={() => onConfirm()}>Terminar mi compra</button>
            </Link>
        </div>
    );
}
 
export default ButtonCount;