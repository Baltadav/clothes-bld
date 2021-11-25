import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [listProduct, setlistProduct] = useState([])

    function getItems() {
        return new Promise((resolve, reject) => {
        const onSuccessful = true
        
          if(onSuccessful){
            setTimeout(
              resolve([
                {
                  id: '001',
                  nombre:'Remera',
                  description: 'Remera de algodol',
                  stock: 20,
                },
                {
                  id: '002',
                  nombre:'Pantalon',
                  description: 'Pantalon de gabardina',
                  stock: 10,
                },
                {
                  id: '003',
                  nombre:'Camisa',
                  description: 'Camisa de lino',
                  stock: 5,
                },
              ]),
              3000
            );
          }else{
            setTimeout(reject(['Sin prendas']),2000)
          }
        });
      }
      
    useEffect(() => {
        const list = getItems()

        list.then(response =>{
            setlistProduct(response)
            //console.log(response)
        })
    }, [])

    //console.log(listProduct)

    return ( 
        <ItemList listProduct={listProduct}/>
    );
}

export default ItemListContainer;