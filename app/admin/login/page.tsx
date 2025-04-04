"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("Attempting login with:", { username });

      // Call server-side authentication API
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log("Login successful, redirecting...");
        // Use window.location for a full page reload instead of router.push
        // This ensures the browser fully recognizes the new auth cookie
        window.location.href = "/admin/bookings";
      } else {
        // Show detailed error message
        console.error("Login failed:", data);
        setError(
          data.message ||
            "Invalid username or password. Make sure your server environment variables are set correctly."
        );
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        "An error occurred during login. Please check the console for details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-coral-500">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Anastasie's 80th Birthday Cruise</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-coral-500 to-coral-600 text-white py-2 px-4 rounded-md hover:from-coral-600 hover:to-coral-700 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Default username: admin</p>
          <p className="mt-1">
            (Configure credentials in server environment variables)
          </p>
        </div>
      </div>
    </div>
  );
}
