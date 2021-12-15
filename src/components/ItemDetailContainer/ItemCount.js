import React, { Fragment } from 'react';
import { useState } from 'react';

const ItemCount = ({stock}) => {

    const [cantidadArticulo, setCantidadArticulo] = useState(1);

    function sumarArticulo(e){
        e.preventDefault();
        
        if (cantidadArticulo < stock) {
            setCantidadArticulo(cantidadArticulo + 1);
        }
    }

    function restarArticulo(e){
        e.preventDefault();
        
        if (cantidadArticulo > 0) {
            setCantidadArticulo(cantidadArticulo - 1);
        }
    }

    function agregarCarrito(e){
        e.preventDefault();
    }

    return (  
        <Fragment>
            <form className="bg-light form md-2">
                <div className="card">
                    <div className="container col-sm-6">
                        <div className="row">

                            <div className="col">
                                {cantidadArticulo === 0?<button onClick={restarArticulo} className="btn btn-secondary disabled">-</button>:<button onClick={restarArticulo} className="btn btn-outline-primary">-</button>}
                            </div>
                            <div className="col">
                                <span type='text' >{cantidadArticulo}</span>
                            </div>
                            <div className="col">
                                {cantidadArticulo === stock?<button onClick={sumarArticulo} className="btn btn-secondary disabled">+</button>:<button onClick={sumarArticulo} className="btn btn-outline-primary">+</button>}
                            </div>
                            

                        </div>
                        <div className="row">

                            <div className="col">
                                <button onClick={agregarCarrito} className="btn btn-outline-primary">Agregar al carrito</button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}
 
export default ItemCount;