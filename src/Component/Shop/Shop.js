import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    
    const [products,setProducts]=useState([])
    const [jewllerys,setJewellerys]=useState([])
    
    const addToCart=(jewllery)=>{
        // console.log(jewllery);
        const newjewellery=[...jewllerys,jewllery]
         setJewellerys(newjewellery) 
    }
    const randomCart=(jewllery)=>{
        if(jewllerys.length>=0){
            let random=Math.floor(Math.random()*jewllerys.length)
            console.log(random);
            
        }
    
    }
    const clearCart=()=>{
        setJewellerys([])
    }
    

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='row'>
            <div className="col-lg-9">
               <div className="row">
               {
                    products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
               </div>
            </div>
            <div className="col-lg-3">
                
                <div className='container cart p-3'>
            <h1 className='mb-5'>Selected Items</h1>
            {
                 jewllerys.map(singleJewellery=> <Cart key={singleJewellery.id} singleJewllery={singleJewellery}></Cart>)
                
                // <h1 key={singleJewellery.id}>{singleJewellery.name}</h1>
            }
                
           
           
            <Button onClick={randomCart} className='button mt-5'>CHOOSE 1 FOR ME</Button>
            <br />
            <Button onClick={clearCart} className='button'>CHOSE AGAIN</Button>
        </div>
            </div>
        </div>
    );
};

export default Shop;