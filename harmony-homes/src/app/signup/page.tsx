"use client";

import React from 'react';
import Link from 'next/link';

export default function SignUp() {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center p-6">
      <main className="bg-secondary text-foreground rounded-lg shadow-sm w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Your Harmony Account</h1>
        <p className="text-muted-foreground text-sm mt-1 text-center mb-6">
          Join the future of real estate transactions
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="John Doe"
              className="w-full p-2 border border-border rounded bg-background text-foreground"
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="john@example.com"
              className="w-full p-2 border border-border rounded bg-background text-foreground"
              required 
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="********"
              className="w-full p-2 border border-border rounded bg-background text-foreground"
              required 
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              placeholder="********"
              className="w-full p-2 border border-border rounded bg-background text-foreground"
              required 
            />
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms" 
              className="mr-2 border border-border rounded"
              required 
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white text-sm py-2 rounded-md hover:bg-primary-hover transition duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-xs">
            Already have an account? {' '}
            <Link href="/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
}
