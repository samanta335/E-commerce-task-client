import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import ProductCard from './ProductCard';

const Product = () => {
    const [product, setproduct]=useState([])

useEffect (()=>{
    fetch('product.json')
    .then((res)=>res.json())
    .then((data)=>setproduct(data))
    
},[])


    return (
        <div className="grid md:grid-cols-3 my-10 lg:my-16  gap-10">
            {
                product.map((products)=>(
                   <ProductCard key={products.id} products={products}></ProductCard>
                ))
            }
            
        </div>
    );
};

export default Product;