import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Main = () => {
  const location = useLocation();
  const withoutHeaderFooter =
    location.pathname.includes("/signIn") ||
    location.pathname.includes("/signUp");
  return (
    <div>
      {withoutHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {/* {withoutHeaderFooter || <Footer></Footer>} */}
    </div>
  );
};

export default Main;