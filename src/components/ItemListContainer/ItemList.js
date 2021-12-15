import React from 'react';
import { Row } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({products}) => {
    
    return ( 
        <div className='container'>
            <Row xs={1} md={4} className="g-4">
                {products.map((product)=> <Item key={product.id} product={product} />)}
            </Row>
        </div>
    );
}
 
export default ItemList;

