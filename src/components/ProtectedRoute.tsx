import React, { ReactElement } from "react"
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{
  isAuthenticated?: boolean;
  element?: ReactElement;
}> = (props) => {
  return props.isAuthenticated ? props.element : <Navigate to="/login" />;
}