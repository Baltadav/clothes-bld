import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ButtonCount from './ButtonCount';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

    const [inputType, setInputType] = useState('')

    const { name, price, img, stock, description } = product;

    const Count = inputType === 'input' ? ButtonCount : ItemCount;

    const addToCart = (count) =>{
        console.log('Se agrego al carrito')
        console.log(count)

        if(count !== 0){
            setInputType('input')
        }
    }

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

                <Count stock={stock} onConfirm={addToCart}/>
            </Card>
        </div>
    );
}
 
export default ItemDetail;