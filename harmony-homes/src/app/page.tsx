
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Navbar/Navbar";

import KeyFeatures from "@/components/key-features";
import RealEstateCTA from "@/components/RealEstateCTA";
import Hero from "./components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <HowItWorks />

      <KeyFeatures />
      <RealEstateCTA />
    </div>

  );
}
