import { Eye, ShoppingCart } from "lucide-react";

import React from "react";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 mb-10">
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">
            <Eye size={22} className="text-indigo-600" />
          </button>
        </div>
        {product.brand && (
          <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {product.brand}
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold line-clamp-1">{product.title}</h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-indigo-600 text-xl font-bold">
            ${product.price}
          </span>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-lg ${
                  index < Math.round(product.rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button className="w-1/2 mt-5 bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition cursor-pointer flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
