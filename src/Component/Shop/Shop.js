import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    
    const [products,setProducts]=useState([])
    const [jewllerys,setJewellerys]=useState([])
   

    const addToCart=(jewllery)=>{
        let newArray=[]
        // console.log(jewllery);
        newArray=[...jewllerys,jewllery]
         setJewellerys(newArray) 
    }

    // const randomCart=()=>{
    //     if(jewllerys.length>=0){
    //         let random=Math.floor(Math.random()*jewllerys.length)
    //         console.log(random); 
            
    //     }

    // }
    const clearCart=()=>{
        setJewellerys([])
    }
    

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='row shopContainer'>
            <div className="col-lg-9 shadow-lg">
               <div className="row">
               {
                    products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
               </div>
            </div>
            <div className="col-lg-3 shadow-lg">
                
                <div className='container cart p-3'>
            <h1 className='mb-5'>Selected Items</h1>
            
                 <Cart singleJewellery={jewllerys} clearCart={clearCart}></Cart>
                
        </div>
            </div>
        </div>
    );
};

export default Shop;