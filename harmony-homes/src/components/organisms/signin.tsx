"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building } from "lucide-react";

export default function Signin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, simulate successful login if email and password are non-empty
    if (formData.email && formData.password) {
      setError('');
      // Redirect to home page
      router.push('/');
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <main className="bg-white text-gray-900 rounded-lg shadow-sm w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <Building className="mb-2" size={40} />
          <h1 className="font-semibold text-3xl">Sign in</h1>
          <p className="text-gray-600 text-sm mt-1 text-center">
            Enter your credentials to access your Harmony account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm">Password</label>
              <a href="/forgot-password" className="text-blue-600 text-xs hover:underline">Forgot password?</a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-600 text-xs mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-600 text-white text-sm py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-xs text-gray-700 mt-6">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </main>
    </section>
  );
}
