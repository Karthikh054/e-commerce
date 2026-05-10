import { Bell, LogOut, Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <button
          className="lg-hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center gap-5">
        <button className="relative cursor-pointer">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <User size={22} />
          <span className="hidden sm:block">Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}
