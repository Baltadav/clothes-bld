import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProducts } from '../../scripts';
import ItemList from './ItemList.js';

const ItemListContainer = ({setlistProduct}) => {

  
  const [products, setProducts] = useState([])

  const {category} = useParams();

  useEffect(() => {
    getProducts(category).then(item =>{
      setProducts(item)
    }).catch(err=>{
      console.log(err)
    })

    return(()=>{
      setProducts([])
    })

  }, [category])

  //<Buscador setlistProduct={setlistProduct}/>
  return ( 
    <Fragment>
      <ItemList products={products}/>
    </Fragment>
  );
}

export default ItemListContainer;