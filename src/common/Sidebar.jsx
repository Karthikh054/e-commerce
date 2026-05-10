import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Settings,
  X,
  TableProperties,
} from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-full w-64 bg-white shadow-xl
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">Admin</h1>

          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-100 text-gray-700"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-100 text-gray-700"
          >
            <TableProperties size={20} />
            Products
          </Link>
          <Link
            to="/users"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-100 text-gray-700"
          >
            <Users size={20} />
            Users
          </Link>
        </nav>
      </div>
    </>
  );
}
