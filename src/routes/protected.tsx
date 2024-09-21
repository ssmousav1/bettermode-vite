import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("token");
  console.log('protesxt');
  

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;