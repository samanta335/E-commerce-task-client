import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxios from "./UseAxios";
import { AuthContext } from "../Page/Authentication/AuthProvider";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const res = await axiosSecure(`/carts/${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};
export default useCart;