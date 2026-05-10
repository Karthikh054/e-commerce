import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Features from "./Features";
import ProductCarosel from "./ProductCarosel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Banner />
      <Features />
      <ProductCarosel />
      <Footer />
    </div>
  );
}
