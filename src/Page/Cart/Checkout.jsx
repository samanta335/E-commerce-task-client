import React, { useState } from 'react';
import {  useCarts } from './CartContext';

const Checkout = () => {
  const { cart, setCart } = useCarts();
  const [orderPlaced, setOrderPlaced] = useState(false);


  const handlePlaceOrder = () => {
    // Here you would integrate with a payment gateway or backend to process the payment
    setOrderPlaced(true);
    setCart([]); // Clear the cart after order is placed
  };

  if (orderPlaced) {
    return <h2 className='ml-12 text-lg'>Thank you for your purchase!</h2>;
  }

  return (
    <div className='ml-16 '>
      <h2 className='font-semibold text-xl'>Checkout-</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div  >
          {cart.map((item) => (
            <div className='text-lg py-4' key={item.id}>
              <p>
                {item.name} x {item.quantity}:  <span className='text-gray-500 ml-5'>€{item.price * item.quantity}</span>
              </p>
              <p>Shipping:  <span className='text-gray-500 ml-5'>Free</span></p>
            </div>
          ))}
          
          <button onClick={handlePlaceOrder} className='text-white bg-black px-5 py-1 rounded-lg'>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
