import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./useAuthContext";

export const ProtectedRoute = ({ children }, path) => {
  const user = useContext(AuthContext);
  return user ? children : <Navigate to={path} />;
};
