import React, { useContext, useState } from 'react';
import useCart from '../../Hooks/UseCart';
import Swal from 'sweetalert2';
import { useCarts } from './CartContext';
import Checkout from './CheckOut';

const Cart = () => {
    const { cart, addToCart, removeFromCart,removeItem  } = useCarts()
    const [showCheckout, setShowCheckout] = React.useState(false);
    const total = cart.map(( item) => item.price * item.quantity, 0);


   
    return (
        <div className='flex  my-10'>
            
                <div className="w-9/12 hoverflow-x-auto">
                <table className="table "> 
                    <h1 className='text-2xl font-semibold ml-5'>An overview of your order</h1>
                    
                {cart.map((item)=>(                 
                  <tbody key={item.id} >
                    {/* row 1 */}
                    <tr> 
                        
                      <td>
                        <div className="flex items-center gap-5">
                        <div className='border px-4 py-2 text-lg font-semibold'>
                        <p>
                         <button onClick={() => removeFromCart(item.id)} className='pr-2'> -  </button>
                         {item.quantity}            
                         <button onClick={() => addToCart(item)} className='pl-2'>  + </button>
                        </p>
                      </div>
                          <div className="avatar">
                            <div className="rounded-lg h-40 w-40">
                              <img
                                src={item.img}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <p className='text-xl font-semibold'>{item.name}</p>
                        </div>
                      </td>
                      <tr>
                      <td className='text-end '>
                        <button onClick={() => removeItem(item.id)} className='text-xl text-gray-500'>X</button>
                      </td>
                      </tr>
                     <tr>
                     <td>
                    <p className='text-end pt-14 text-lg font-semibold'>€{item.price}</p>
                     </td>
                     </tr>
                    </tr>
                  </tbody>
                  
                ))}
           
                </table>
              </div>
              <div className='w-1/4'>
              <h1  className='text-2xl font-semibold ml-5'>Order Details</h1>
<div className='border m-4 p-5 text-lg font-semibold'>
    <p>SubTotal: <span className='pl-10 text-gray-500 font-medium'>€{total}</span></p>
    <p className='my-2'>Shipping: <span className='pl-10 text-gray-500 font-medium'>Free</span></p>
<div className='divide-y divide-solid '>
    <p>Tax:  <span className='pl-24 text-gray-500 font-medium'>€-</span></p>
    <p className='my-3'>Total: <span className='pl-16 text-gray-500 font-medium'>€{total}</span></p>
</div>
</div>
{showCheckout ? (
        <Checkout />
      ) : (
        <>
        
          <button className='ml-16 rounded-lg bg-black px-8 py-2 text-white' onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>
        </>
      )}
  </div>
  
  </div>
)};

export default Cart;