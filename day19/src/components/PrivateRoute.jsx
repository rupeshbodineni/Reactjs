import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="page-loader">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" replace state={{ from: location }} />;
}
