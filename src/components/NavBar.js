    import React from 'react'
import CartWidget from './CartWidget';

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
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/store">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/quienes-somos">Quienes somos?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/inicio-sesion">Iniciar sesion</a>
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