import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='row g-1'>
            <div className="col-lg-9">
                {
                    products.map(product=>console.log(product))
                }
            </div>
            <div className="col-lg-3">
                
            </div>
        </div>
    );
};

export default Shop;