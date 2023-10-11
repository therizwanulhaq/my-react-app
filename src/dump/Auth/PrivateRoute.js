// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "./authService";

function PrivateRoute({ element: Element, adminRequired, ...rest }) {
  if (adminRequired && !isAdmin()) {
    return <Navigate to="/dashboard" />;
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
}

export default PrivateRoute;
