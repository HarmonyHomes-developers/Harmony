import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/key-features";

//import Image from "next/image";
import Navbar from "@/components/Navbar";
import KeyFeatures from "@/components/key-features";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HowItWorks />
      <KeyFeatures />
    </div>
  );
}
