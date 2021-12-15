import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

    const { name, price, img, stock, description } = product;

    return (
        <div className='col' style={{margin:'1rem'}}>
            <Card className='text-center'>
                <Card.Img variant="top" src={img} alt={name} style={{ width: '15rem', height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                        <br/>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ItemCount stock={stock}/>
            </Card>
        </div>
    );
}
 
export default ItemDetail;