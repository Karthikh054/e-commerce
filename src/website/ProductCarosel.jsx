import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "./common/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/authApi";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function ProductCarosel() {
  const { data, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10">
      <div className="flex text-center justify-center mb-10">
        <h2 className="text-4xl font-bold">Trending Products</h2>
      </div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.products.map((products) => (
          <SwiperSlide key={products.id}>
            <ProductCard product={products} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-center justify-center mt-10">
        <Link to="/product">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCarosel;
