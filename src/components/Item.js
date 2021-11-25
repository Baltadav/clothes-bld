import React from 'react';

const Item = ({product}) => {

    const { nombre, descripcion, stock } = product;

    return (
        <li>{`Nombre: ${nombre}, Descripcion: ${descripcion}, Stock disponible: ${stock}`}</li>
    );
}
 
export default Item;