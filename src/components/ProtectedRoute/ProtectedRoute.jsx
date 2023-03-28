import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsLogin } from "@/store/userSlice";

export default function ProtectedRoute ({ element: Component, ...props }) {
  const isLogin = useSelector(selectUserIsLogin);

  return isLogin ? (
    <Component {...props} />
  ) : (
    <Navigate to="/simple-hotel-check/auth" replace />
  );
};

