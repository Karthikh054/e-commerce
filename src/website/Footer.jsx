import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-5">E-Commerce</h2>
          <p className="text-gray-400 leading">
            Build beautiful and responsive ecommerce websites using React and
            Tailwind CSS.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Link</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-white transition">
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping Info</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe for latest updates.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 outline-none w-full"
            />

            <button className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-gray-400 text-sm">
        © 2026 E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}
