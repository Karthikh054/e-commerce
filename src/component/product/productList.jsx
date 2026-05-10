import React, { useState, useEffect, useRef } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import MainLayout from "../../layout/MainLayout";
import ProductCard from "../../common/ProductCard";
import { getProductList } from "../../api/authApi";
import ProductSkeleton from "./ProductSkeleton";

export default function productList() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProductList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextSkip = allPages.length * 12;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  const products = data?.pages.flatMap((page) => page.products) || [];

  const [search, setSearch] = useState("");
  const observerRef = useRef(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const brands = [
    "All",
    ...new Set(products.map((p) => p.brand).filter(Boolean)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().includes(search);

      const matchesBrand =
        selectedBrand === "All" || product.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    })
    .sort((a, b) => {
      if (sortBy === "lowToHigh") {
        return a.price - b.price;
      }
      if (sortBy === "highToLow") {
        return b.price - a.price;
      }
      if (sortBy === "aToZ") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "zToA") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1,
      },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (error) {
    return (
      <MainLayout>
        <h1 className="text-red-500 text-xl">Something went wrong</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 px-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
          >
            <option value="">Sort By</option>

            <option value="lowToHigh">Price: Low to High</option>

            <option value="highToLow">Price: High to Low</option>

            <option value="aToZ">Name: A to Z</option>

            <option value="zToA">Name: Z to A</option>
          </select>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border border-gray-300 px-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <p className="text-gray-500 font-medium">
            Total: {filteredProducts.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}{" "}
      </div>
      <div ref={observerRef} className="flex justify-center py-10">
        {isFetchingNextPage && (
          <p className="text-gray-500">Loading More Products...</p>
        )}
      </div>
    </MainLayout>
  );
}
