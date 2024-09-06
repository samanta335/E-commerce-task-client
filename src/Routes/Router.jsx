import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Page/Authentication/SignIn";
import SignUp from "../Page/Authentication/SignUp";
import Product from "../Page/Product/Product";
import Cart from "../Page/Cart/Cart";
import Home from "../Page/Home";
import Filter from "../Filter/Filter";
import Filter2 from "../Filter/Filter2";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/signIn",
          element: <SignIn></SignIn>,
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>,
          },
          {
            path: "/products",
            element: <Product></Product>,
          },
          {
            path: "/chair",
            element: <Filter></Filter>,
          },
          {
            path: "/sofa",
            element: <Filter2></Filter2>,
          },
          {
            path: "/cart",
            element: <Cart></Cart>,
          },
    ]}])
    export default router;