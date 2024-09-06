import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/UseCart';
import { useCarts } from '../Cart/CartContext';

const ProductCard = ({products}) => {
    const { name, img, price,quantity,  id } = products;
    const {user} = useContext(AuthContext)
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation()
    const { addToCart } = useCarts()
    
    const handleCart = (products) => {
        if (user && user.email) {
          const cartItem = {
            id,
            name,
            img,
            price,
            quantity,
            email: user.email,
          };
          fetch("http://localhost:5000/carts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                refetch(); // refetch cart to update the number of items in the cart
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added on the cart.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        } else {
          Swal.fire({
            title: "Please login to order the Item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login now!",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/signIn", { state: { from: location } });
            }
          });
        }
      };
    return (
        <div>
             <div key={products.id} className="border h-full w-96 rounded relative bg-slate-50 shadow-lg">
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
    <p className='text-gray-600 mt-2'>{products.description}</p>
    <div className=" my-7">
      <button onClick={() => {handleCart(products);addToCart(products)}} className='bg-black flex items-center mx-auto gap-2 hover:bg-black text-lg font-semibold px-16 py-1 text-white rounded-lg'>
<FaShoppingCart />  Add to cart
      </button>
    </div>
    </div>
    </div>
        </div>
    );
};

export default ProductCard;