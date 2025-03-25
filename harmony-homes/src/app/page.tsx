
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Navbar/Navbar";

import KeyFeatures from "@/components/key-features";
import RealEstateCTA from "@/components/RealEstateCTA";
import Image from "next/image";

import Hero from "./components/Hero";

import Header from "@/components/Navbar/Navbar";


export default function Home() {
  return (
    <div>

      Home
            <Hero />

      <Header />
      <HowItWorks />

      <KeyFeatures />
      <RealEstateCTA />
    </div>

  );
}
