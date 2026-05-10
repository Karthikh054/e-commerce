import { Star, Eye, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 overflow-hidden relative">
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.brand}
        </div>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">
            <Eye size={22} className="text-indigo-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold line-clamp-1">{product.title}</h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />

            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
          </div>

          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              product.availabilityStatus === "In Stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <span className="text-indigo-600 text-2xl font-bold">
            ${product.price}
          </span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
