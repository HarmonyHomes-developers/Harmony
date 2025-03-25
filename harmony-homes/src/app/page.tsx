import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Navbar/Navbar";
import KeyFeatures from "@/components/key-features";
import RealEstateCTA from "@/components/RealEstateCTA";
import Image from "next/image";
import Header from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <KeyFeatures />
      <RealEstateCTA />
    </div>
  );
}
