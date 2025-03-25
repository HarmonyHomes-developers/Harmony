
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Navbar/Navbar";

import KeyFeatures from "@/components/key-features";
import RealEstateCTA from "@/components/RealEstateCTA";

import Hero from "./components/Hero";




export default function Home() {
  return (
    <div className="bg-[#191970] " >




      <Header />
      <Hero />
      <HowItWorks />

      <KeyFeatures />
      <RealEstateCTA />
    </div>

  );
}
