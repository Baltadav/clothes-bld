import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    const { name, price, img, id } = product;

    return (
        <div className='col' style={{margin:'1rem'}}>
            <Card className='text-center'>
                <Card.Img variant="top" src={img} alt={name} style={{ width: '15rem', height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Link variant="primary" to={`/item/${id}`}>Ver detalle</Link>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Item;