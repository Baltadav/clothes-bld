import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList.js';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    
    const total = collection(db, "items");

    if(!category){
      getDocs(total).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
      });
    }else{
      const cat_filter = query(
        total,
        where("category", "==", category));
      getDocs(cat_filter).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
      });
    }
    return(()=>{
      setProducts([])
    })
  }, [category]);

  return ( 
    <Fragment>
      <ItemList products={products}/>
    </Fragment>
  );
}

export default ItemListContainer;