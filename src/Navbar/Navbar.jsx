import React, { useContext } from 'react';
import { FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Page/Authentication/AuthProvider';
import useCart from '../Hooks/UseCart';
import { FaCartShopping } from 'react-icons/fa6';
import { useCarts } from '../Page/Cart/CartContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const {cart} = useCarts();

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };
    return (
        <div>
             <div className="h-full">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              
            </ul>
          </div>
          <img
            className="rounded-full w-12 h-12  "
            src="https://img.freepik.com/premium-vector/letter-f-wing-logo-design-freight-transportation-symbol-wing-logotype-template_754537-6408.jpg"
            alt=""
          />
          <a className=" text-2xl pl-3 font-semibold">FurniFusion </a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal  text-base font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/products">Products</Link>
            </li>
           
          </ul>
        </div>
        <div className="navbar-end lg:flex ">
          <ul className="menu menu-horizontal text-base font-medium">
            {user ? (
              <>
                <Link to='/cart'><li >
                <FaCartShopping className='relative text-black w-16 h-16'></FaCartShopping>

                </li></Link>
                <div className="absolute  text-blue-500 font-bold text-lg">+{cart?.length || 0}</div>
                <li>
                  <img
                    referrerPolicy="no-referrer"
                    className="w-20 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </li>
                  <button
                    className="btn px-6 text-lg hover:bg-black bg-black text-white"
                    onClick={handleLogOut}
                    >
                      <li>
                    Logout
                </li>
                  </button>
              </>
            ) : (
                <Link className="btn text-white px-6 text-lg hover:bg-black bg-black" to="/signIn">
              <li>
                  Sign In
              </li>
                </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Navbar;