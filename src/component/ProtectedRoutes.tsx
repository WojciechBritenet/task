//@ts-nocheck
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = JSON.parse(window.localStorage.getItem("auth"))
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;