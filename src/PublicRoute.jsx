import React from "react";

import { Navigate } from "react-router-dom";

import { useAuthStore } from "./store/authStore";

export default function PublicRoute({ children }) {
  const token = useAuthStore((state) => state.token);

  // Already Logged In
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
