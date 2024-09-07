import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { Link, } from 'react-router-dom';

const Home = () => {
    


    return (
        <div className=''>
<div className="drawer lg:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <div className='w-full'>
<Product></Product>
    </div>    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
<div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu  text-base-content min-h-full mx-8">
    <Link to="/chair"><p className='px-16 mt-24 hover:bg-black btn bg-black text-white'>Chair</p></Link>
    <Link to="/sofa"><p className=' px-16 my-4 hover:bg-black btn bg-black text-white'>Sofa</p></Link>
    </ul>
  </div>
    </div>
</div>
    );
};

export default Home;