import React from "react";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success("Login Success");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 items-center justify-center text-white p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-sm text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
            >
              {mutation.isPending ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
