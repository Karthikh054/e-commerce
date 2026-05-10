import React from "react";

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
        <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-3xl">
          🚚
        </div>

        <h3 className="text-2xl font-bold mt-6">Fast Delivery</h3>

        <p className="text-gray-600 mt-4 leading-7">
          Get your products delivered quickly with our fast and reliable
          shipping.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-3xl">
          ⭐
        </div>

        <h3 className="text-2xl font-bold mt-6">Premium Quality</h3>

        <p className="text-gray-600 mt-4 leading-7">
          Explore top quality products designed for style, comfort, and
          durability.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-3xl">
          🔒
        </div>

        <h3 className="text-2xl font-bold mt-6">Secure Payments</h3>

        <p className="text-gray-600 mt-4 leading-7">
          Safe and encrypted payment methods for a worry-free shopping
          experience.
        </p>
      </div>
    </section>
  );
}

export default Features;
