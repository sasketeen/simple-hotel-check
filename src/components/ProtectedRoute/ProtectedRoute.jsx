import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute ({ element: Component, ...props }) {
  return props.isSignIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/simple-hotel-check/auth" replace />
  );
};

