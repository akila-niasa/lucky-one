import React from 'react';
import './Product.css'
import { Button, Card } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

const Product = ({product,addToCart}) => {
    const {img, name,price,id}=product
    
    return (
        <div className='col-lg-4 col-12 my-1'>
            <Card className='p-2'>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      price:${price}
    </Card.Text>
    <Button className='button' onClick={()=>addToCart(product)}>Add to cart <BsFillCartFill/></Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Product;