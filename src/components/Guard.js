import { Outlet, Navigate } from "react-router-dom";

const Guard = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let isLogin = user && user.name;

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};
export default Guard;
