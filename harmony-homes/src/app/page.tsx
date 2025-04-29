
import Header from "@/components/organisms/navbar";
import KeyFeatures from "@/components/organisms/key-features";
import Image from "next/image";
import RealEstateCTA from "@/components/molecules/realEstateCTA";
import Hero from "../components/molecules/hero";
import HowItWorks from "@/components/organisms/howItWorks";


import Link from "next/link";
export default function Home() {
  return (
    <div >
      <Header />

      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <RealEstateCTA />

      <nav className="flex justify-center gap-4 mt-8 mb-8">
        <Link href="/signin">
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Sign Up
          </button>
        </Link>
      </nav>
    </div>

  );
}
