
import Header from "@/components/organisms/navbar";
import KeyFeatures from "@/components/organisms/key-features";
import Image from "next/image";
import RealEstateCTA from "@/components/molecules/realEstateCTA";
import Hero from "../components/molecules/hero";
import HowItWorks from "@/components/organisms/howItWorks";

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
