import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    
    useEffect(() => {
        const db = getFirestore()

        const productById = doc(db, "items", productId)
        getDoc(productById).then((snapshot) => {
            if (snapshot.exists()){
                setProduct({id: snapshot.id, ...snapshot.data() })
            }
        });
        
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