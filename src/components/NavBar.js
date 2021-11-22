import React from 'react'

const NavBar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">#Clothes</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <div class="" >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/store">Tienda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/quienes-somos">Quienes somos?</a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/inicio-sesion">Iniciar sesion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/registro">Registrate</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
      </nav>
    );
}
 
export default NavBar;