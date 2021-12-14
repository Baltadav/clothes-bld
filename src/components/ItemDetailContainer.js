import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getProductById } from '../scripts';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    console.log(productId)
    
    useEffect(() => {
        getProductById(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })
        
        return (() => {
            setProduct()
        })

    }, [productId])

    return (
        <div>
            <ItemDetail product={product}/>         
        </div>
    );
}
 
export default ItemDetailContainer;