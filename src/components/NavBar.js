import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">#Clothes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <div className="" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/celular'} className="nav-link" >Celulares</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/tablet'} className="nav-link">Tablets</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/inicio-sesion'} className="nav-link">Iniciar sesion</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <CartWidget cartTotal="2"/>
        </div>
    </nav>
    );
}

export default NavBar;