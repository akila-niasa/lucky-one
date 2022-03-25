import React from 'react';
import './Cart.css'
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Cart = ({singleJewllery}) => {
    const {name}=singleJewllery
    return (
       <div>
         <h1>{name}</h1>
           
       </div>
        
    );
};

export default Cart;