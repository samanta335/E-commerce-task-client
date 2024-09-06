import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        setError
      } = useForm()
      const { createUser } = useContext(AuthContext);
      const navigate = useNavigate();

      const onSubmit = (data) => {
      
        console.log(data);
        createUser(data.email, data.password).then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          const saveUser = { name: data.name, email: data.email };
          fetch("https://e-commerce-task-server-lake.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    }
    return (
        <div>
              <div>
          <div className=" hero min-h-screen  "
        >
        <div className="hero-content flex-row-reverse">
        <div className="text-center ">
        <img
              className="w-9/12 ml-14  opacity-85"
              src="https://i.pinimg.com/564x/97/8e/76/978e7681c7fa3eaedafd58177aa26f60.jpg"
              alt=""
            />
          </div>

          <div className='w-full max-w-sm'>
          <h1 className="gradient-animation text-2xl mb-12 bg-gradient-to-r from-indigo-800 from-25% via-sky-200 via-30% to-black to-80%  text-transparent bg-clip-text text-center font-bold"> Welcome to <p className='text-4xl'>FurniFusion </p></h1>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
             <div className='flex gap-2'>
             <div className="form-control">
                <input
                type='text'
                {...register("name", { required: true })}
                name='name'
                placeholder='First Name*'
                className="input input-bordered px-1 focus:outline-none "
                />
                {errors.name && (
                  <span className="text-red-600">First name is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                type='text'
                {...register("name", { required: true })}
                name='name'
                placeholder='Last Name*'
                className="input input-bordered px-1 focus:outline-none "
                />
                {errors.name && (
                  <span className="text-red-600">Last name is required</span>
                )}
              </div>
             </div>
              <div className="form-control">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email*"
                  className=" my-5 input input-bordered focus:outline-none "
                />
                 {errors.email && (
                  <span className="text-red-600 mb-5">Email is required</span>
                )} 
              </div>
              <div className="form-control">
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password*"
                  className="input  input-bordered focus:outline-none "
                />
               <p className='w-64 '>
               {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 10 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                   .
                  </p>
                )}
               </p>
              </div>
              <div className="form-control ">
                <input
                  className="btn my-5 text-lg bg-black text-white hover:bg-black"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className=" mb-5 text-center ">
              Already have an account? <Link className="underline text-blue-600 font-semibold" to="/signIn"> Sign In
              </Link>
            </p>
            
            <div className="divider">Or</div>
            <SocialLogin></SocialLogin>
          </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;