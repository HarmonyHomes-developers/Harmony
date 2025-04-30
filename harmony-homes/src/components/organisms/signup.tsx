"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building } from "lucide-react";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    terms: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.terms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }
    // Handle form submission logic here
    setError('');
    console.log(formData);
    // Redirect to home page on successful signup
    router.push('/');
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
          <div className="flex gap-4 mb-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-sm mb-1">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-sm mb-1">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
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
            <label htmlFor="password" className="text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                error === 'Passwords do not match' ? 'border-red-600' : 'border-gray-300'
              }`}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="confirmPassword" className="text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                error === 'Passwords do not match' ? 'border-red-600' : 'border-gray-300'
              }`}
              required
            />
          </div>
          {error && <p className="text-red-600 text-xs mb-4">{error}</p>}
          <fieldset className="mb-4">
            <legend className="text-sm mb-2 font-normal">I am a:</legend>
            <div className="flex flex-col space-y-1 text-sm">
              {['buyer', 'seller', 'realEstateAgent', 'developer'].map((role) => (
                <label key={role} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={formData.role === role}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  {role.charAt(0).toUpperCase() + role.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="flex items-center gap-2 mb-6 text-sm">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="text-blue-600 focus:ring-blue-500"
              required
            />
            I agree to the Terms of Service and Privacy Policy
          </label>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white text-sm py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Create account
          </button>
        </form>
        <p className="text-center text-xs text-gray-700 mt-6">
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </main>
    </section>
  );
}
