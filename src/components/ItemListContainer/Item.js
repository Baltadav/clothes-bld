import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({product}) => {

    const { name, price, img, id, description } = product;

    return (
        <div className='col border card_div g-0'>
            {/* <Card className='text-center'>
                <Card.Img variant="top" src={img} alt={name} style={{ width: '15rem', height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Link variant="primary" to={`/item/${id}`}>Ver detalle</Link>
                </Card.Body>
            </Card> */}

            <img className= 'card_img border-bottom' src={img} alt={name}></img>
            <div className= 'container'>
                <div className='row card_text justify-content-between'>
                    <div className='col-4'>
                    <h4>${price}</h4>
                    </div>
                    <div className='col-4'>
                        <Link to={`/item/${id}`}>
                            <button className='card_btn'>
                                Ver más
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='col card_text'>
                   <h8>{name}</h8>
                </div>            
            </div>
            
        </div>
    );
}
 
export default Item;