import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/login/login";
import Dashboard from "./component/dashboard/dashboard";
import Error from "./component/error/error";
import ProductList from "./component/product/productList";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "./website/Home";
import ProductAll from "./website/ProductAll";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductAll />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
