import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ productDetail }) => {

    const { title, price, thumbnail } = productDetail;

    return (
        <div className='col' style={{margin:'1rem'}}>
            <Card className='text-center'>
                <Card.Img variant="top" src={thumbnail} alt={title} style={{ width: '15rem', height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Button variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default ItemDetail;