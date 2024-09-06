import React, { useContext, useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaUserLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './Animation.css'
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

const SignIn = () => {
    const [loginError, setLoginError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();  
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signUp(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: `Logged in as ${result.user.email}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};
      


    return (
        <div className="hero min-h-screen " >
        <div className="hero-content flex-row-reverse " >
          <div className="text-center " >
            
            <img
              className="w-11/12 ml-14  opacity-85"
              src="https://i.pinimg.com/564x/97/8e/76/978e7681c7fa3eaedafd58177aa26f60.jpg"
              alt=""
            />
          </div>
          <div className=" w-full max-w-sm ">
              <h1 className="gradient-animation text-2xl mb-12 bg-gradient-to-r from-indigo-800 from-25% via-sky-200 via-30% to-black to-80% text-transparent bg-clip-text text-center font-bold"> Welcome to <p className='text-4xl'>FurniFusion </p></h1>
            <form onSubmit={handleLogin} >
              {/* <p>{loginError}</p> */}
              <div className="form-control my-5">
                <input
                  type="text"
                  placeholder='Email'
                  required='email is required'
                  name="email"
                  className="input px-14 relative rounded-full bg-base-200 focus:outline-none"
                />
<FaEnvelope className='absolute my-4 mx-8 text-gray-500'/>

              </div>

              <div className="form-control">
                <input
                  type={passwordVisible? "text": "password"}
                  placeholder="Password"
                  name="password"
                  required='password'
                  className="input px-14 relative rounded-full bg-base-200 focus:outline-none"
                />
                <FaUserLock className='absolute my-4 mx-8 text-gray-500'/>
               {passwordVisible ? (
                 <FaEye
                 className="absolute password-toggle my-4 ml-80"
                 onClick={togglePasswordVisibility}
                  />
                ) : (
                 <FaEyeSlash
                  className="absolute password-toggle my-4 ml-80"
                   onClick={togglePasswordVisibility}
                   />
                  )}
              </div>
             <div className="form-control mt-8 ">
                <input type="submit" className="btn mx-14 text-lg bg-black hover:bg-black text-white" value="Sign In" />
              </div>
            </form>
            <p className="mt-8 mb-5 text-center">
            Don't have an account? <Link to="/signUp" className="underline font-semibold text-blue-600"> Sign Up
            </Link>
          </p>

          <div className="divider">Or</div>
          <SocialLogin ></SocialLogin>
          </div> 
        </div>
        </div>
    );
};

export default SignIn;