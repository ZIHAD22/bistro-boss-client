import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading fullScreen={true} />;
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoute;
