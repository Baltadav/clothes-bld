import React from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ productDetail}) => {
    return (
        <div>
            <ItemDetail productDetail={productDetail}/>
        </div>
    );
}
 
export default ItemDetailContainer;