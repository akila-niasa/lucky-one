import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([])
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
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
               </div>
            </div>
            <div className="col-lg-3">
                <h1>nsme</h1>
            </div>
        </div>
    );
};

export default Shop;