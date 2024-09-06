import React, { useEffect, useState } from 'react';

const Filter = () => {
    const [product, setproduct]=useState([])
    useEffect (()=>{
        fetch('product.json')
        .then((res)=>res.json())
        .then((data)=>setproduct(data))
        
    },[])


  const chair = product.filter((item) => item.category === "chair");
    return (
        <div className='mx-auto grid grid-cols-3 gap-8'>
            {chair.map((products)=>(
                <div key={products.id} className=" mx-auto border h-full w-96 rounded relative bg-slate-50 shadow-lg">
                <img
                  src={products.img}
                  className='w-full h-48 object-cover rounded mb-4'
                  alt="Shoes" />
              <div className="px-5">
               
                <h2 className="text-xl font-bold mb-2">{products.name}</h2>
            
                <div className='flex gap-4 mt-2'>
                    <p className='font-semibold'>€{products.price}</p>
                    <p className='text-gray-400 text-lg line-through'>€{products.old_price}</p>
                    <p className='text-red-500'>{products.discount}</p>
                </div>
                <p className='text-gray-600 my-5'>{products.description}</p>
                </div>
                </div>
            ))}


        </div>
    );
};

export default Filter;