"use client";

import Image from "next/image";
import { useState } from "react";
import { Building } from "lucide-react";

export default function Signin() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <main className="bg-white text-gray-900 rounded-lg shadow-sm w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <Building className="mb-2" size={40} />
          <h1 className=" font-semibold text-3xl">Create an account</h1>
          <p className="text-gray-600 text-sm mt-1 text-center">
            Enter your information to create a Harmony account
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
          
    
    

          <button
            type="submit"
            className="w-full bg-gray-600 text-white text-sm py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Create account
          </button>
        </form>
        <p className="text-center text-xs text-gray-700 mt-6">
          Don't have an account? <a href="/login" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </main>
    </section>
  );
}
