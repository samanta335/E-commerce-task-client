import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn  } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleSignIn().then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser)
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
          };
          fetch("https://pathway-travel-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
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
        });
      };
    return (
        <div>
             <button onClick={handleGoogle} className="border p-2 rounded-lg flex items-center mx-auto gap-2"><img className='w-7 h-7' src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" /> Sign in with Google </button>
        </div>
    );
};

export default SocialLogin;