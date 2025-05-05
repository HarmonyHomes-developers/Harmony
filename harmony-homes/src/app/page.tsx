import React from 'react';
import Header from "@/components/organisms/navbar";
import KeyFeatures from "@/components/organisms/key-features";
import Image from "next/image";
import RealEstateCTA from "@/components/molecules/realEstateCTA";
import Hero from "../components/molecules/hero";
import HowItWorks from "@/components/organisms/howItWorks";
import Link from "next/link";

export default function Home(): React.ReactElement {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <RealEstateCTA />

      <nav className="flex justify-center gap-4 mt-8 mb-8">
        <Link href="/signin">
          <button 
            type="button"
            className="px-4 py-2 bg-secondary text-foreground rounded hover:bg-secondary-hover transition-colors"
          >
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button 
            type="button"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
          >
            Sign Up
          </button>
        </Link>
      </nav>
    </div>
  );
}
