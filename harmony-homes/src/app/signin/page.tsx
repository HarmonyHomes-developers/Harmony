"use client";

import React from 'react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center p-6">
      <main className="bg-secondary text-foreground rounded-lg shadow-sm w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
        <p className="text-muted-foreground text-sm mt-1 text-center mb-6">
          Sign in to continue your real estate journey
        </p>

        <form className="space-y-4">
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
            <div className="flex justify-end mt-2">
              <Link href="/forgot-password" className="text-primary text-xs hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white text-sm py-2 rounded-md hover:bg-primary-hover transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-xs">
            Don't have an account? {' '}
            <Link href="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
}
