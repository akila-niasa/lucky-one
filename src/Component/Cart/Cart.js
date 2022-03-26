import React, { useState } from 'react';
import './Cart.css'
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Cart = ({singleJewllery}) => {
    // console.log(singleJewllery);
   
    const {name}=singleJewllery
    
//     // console.log(newName.length);
//   if(singleJewllery.length>=0){
//     let random=Math.floor(Math.random()*singleJewllery.length)
//     console.log(random);
//   }
    
    return (
       <div>
        <div>
        <h1>{name}</h1>
        </div>
 
       </div>
        
    );
};

export default Cart;