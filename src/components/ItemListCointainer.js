import React, { Fragment, useState } from 'react';
import Buscador from './Buscador';
import ItemList from './ItemList';

const ItemListContainer = () => {

  const [listProduct, setlistProduct] = useState([])

  return ( 
    <Fragment>
      <Buscador setlistProduct={setlistProduct}/>
      <ItemList listProduct={listProduct}/>
    </Fragment>
  );
}

export default ItemListContainer;