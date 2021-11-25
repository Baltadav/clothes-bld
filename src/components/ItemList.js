import React from 'react';
import Item from './Item';

const ItemList = ({listProduct}) => {


    return ( 
        <ul>
            {listProduct.map((product)=> <Item key={product.id} product={product}/>)}
        </ul>
    );
}
 
export default ItemList;

