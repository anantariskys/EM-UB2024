import { Outlet, Navigate } from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";


const GuestRoute = () => {
    const {isAuthenticated} = useAuth()
  

  if (!isAuthenticated) {
      return <Outlet />;
    }
    return <Navigate to={"/adminnnn"} />;
};

export default GuestRoute;