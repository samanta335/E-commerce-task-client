import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [product, setproduct]=useState([])

useEffect (()=>{
    fetch('https://e-commerce-task-server-lake.vercel.app/product')
    .then((res)=>res.json())
    .then((data)=>setproduct(data))
    
},[])


    return (
        <div className="grid md:grid-cols-3 my-10 lg:my-16  gap-10">
            {
                product.map((products)=>(
                   <ProductCard key={products._id} products={products}></ProductCard>
                ))
            }
            
        </div>
    );
};

export default Product;