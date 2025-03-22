import Image from 'next/image';
import React from 'react';

interface KeyFeatureCardProp {
  icon: string;
  title: string;
  descrption: string;
}

export default function KeyFeatures() {
  const keyProps: KeyFeatureCardProp[] = [
    {
      icon: "/svgs/secure.svg",
      title: "Secure Authentication",
      descrption:
        "Multi-factor authentication and advanced security measures to protect your account and transactions.",
    },
    {
      icon: "/svgs/properties.svg",
      title: "Detailed Property Listings",
      descrption:
        "Comprehensive property information with images, specifications, and blockchain verification.",
    },
    {
      icon: "/svgs/globe.svg",
      title: "Global Accessibility",
      descrption:
        "Access properties worldwide with support for international users and cross-border transactions.",
    },
    {
      icon: "/svgs/users.svg",
      title: "User Dashboard",
      descrption:
        "Personalized dashboard to manage listings, track transactions, and access important documents.",
    },
  ];

    return (
      <div className="w-full min-h-screen bg-white flex flex-col md:justify-center items-center px-6 py-12">
        <h1 className="text-black font-bold text-2xl md:text-4xl mb-2 text-center">
          Key Features
        </h1>
        <p className="text-[#71717A] texl-[0.625rem]  md:text-xl text-center mb-8 max-w-3xl">
          Harmony provides a comprehensive suite of tools for modern real estate transactions.
        </p>
  
        {/* Responsive Grid with Wider Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(320px,1fr))] gap-10 w-full max-w-5xl">
          {keyProps.map((feature, index) => (
            <KeyFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    );
  }
  

function KeyFeatureCard({ icon, title, descrption }: KeyFeatureCardProp) {
  return (
    <div className="w-full h-fit flex flex-col items-start">
      <Image src={icon} alt={title} width={40} height={40} quality={90} className='md:w-fit md:h-fit w-[1.25rem] h-[1.25rem]' />
      <p className="my-4 font-bold text-[1rem] md:text-xl text-black">{title}</p>
      <p className="text-base text-[#71717A]">{descrption}</p>
    </div>
  );
}
