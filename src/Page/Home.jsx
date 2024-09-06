import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    


    return (
        <div className='flex gap-5'>
<div className='flex flex-col w-2/12 my-28 gap-3'>
    <Link to="/chair"><p className='px-16 hover:bg-black btn bg-black text-white'>Chair</p></Link>
    <Link to="/sofa"><p className=' px-16 hover:bg-black btn bg-black text-white'>Sofa</p></Link>
</div>
<div className='w-full'>
<Product></Product>
    </div>        
    </div>
    );
};

export default Home;