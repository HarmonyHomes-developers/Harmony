import React from "react";
import { Eye, Lock, User, Globe, Check } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 bg-[#F4F4F5]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            About Harmony
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Revolutionizing real estate transactions with blockchain technology
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-[10px] md:text-base">
                At Harmony, we're on a mission to transform the real estate
                industry by creating a more transparent, efficient, and
                accessible marketplace for property transactions.
              </p>
              <p className="mt-3">
                <span className="text-gray-500  text-[8px] md:text-sm">
                  Founded in 2023, Harmony leverages the power of blockchain
                  technology to address longstanding challenges in real estate
                  transactions, including fraud, lack of transparency, high
                  fees, and lengthy processing times.
                </span>
                <h3 className="text-gray-500  text-[8px] md:text-sm mt-3">
                  By utilizing the Stellar blockchain, we provide a secure and
                  immutable record of property ownership, enabling buyers and
                  sellers to engage in direct, peer-to-peer transactions with
                  confidence.
                </h3>
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              {/* Placeholder for image */}
              <span className="text-gray-500">[Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#F4F4F5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center  text-black">
            Our Values
          </h2>
          <p className=" text-gray-500 text-center my-2">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
            <div className="text-center bg-white p-4 rounded">
              <div className="bg-gray-200  w-10 h-10 mx-auto rounded-full mb-4 flex items-center justify-center">
                <Eye className="text-black" />
              </div>
              <h3 className="text-sm font-semibold mb-2 text-black">
                Transparency
              </h3>
              <p className="text-gray-600 text-center">
                We believe in complete transparency in all property
                transactions, providing verifiable records on the blockchain.
              </p>
            </div>
            <div className="text-center bg-white p-4 rounded">
              <div className="bg-gray-200 h-10 w-10 mx-auto rounded-full mb-4 flex items-center justify-center">
                <Lock className="text-black" />
              </div>
              <h3 className="text-sm text-black font-semibold mb-2">
                Security
              </h3>
              <p className="text-gray-600">
                We prioritize the security of user data and transactions,
                implementing robust measures to protect against fraud.
              </p>
            </div>
            <div className="text-center bg-white p-4 rounded">
              <div className="bg-gray-200 h-10 w-10 mx-auto rounded-full mb-4 flex items-center justify-center">
                <Globe className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black text-sma">
                Accessibility
              </h3>
              <p className="text-gray-600">
                We're committed to making real estate transactions accessible to
                everyone, regardless of location or background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Harmony Advantage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center">
            The Harmony Advantage
          </h2>
          <p className="text-center text-gray-500 my-3">
            What sets us apart from traditional real estate platforms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
            <div>
              <h3 className="text-sm text-black font-semibold flex flex-row  items-center ">
                <div className="border w-3 h-3 rounded-full flex items-center">
                  <Check className="w-2 h-2" />
                </div>

                <span className="ml-3">Blockchain Verification</span>
              </h3>
              <p className="text-gray-600 mb-4 text-[11px] text-gray-500 mt-2">
                All property listings and transactions are verified and recorded
                on the Stellar blockchain, providing an immutable and
                transparent record of ownership.
              </p>
            </div>
            <div>
              <h3 className="text-sm text-black font-semibold flex flex-row  items-center ">
                <div className="border w-3 h-3 rounded-full flex items-center">
                  <Check className="w-2 h-2" />
                </div>

                <span className="ml-3"> Faster Transactions</span>
              </h3>

              <p className="text-gray-600 mb-4 text-[11px] text-gray-500 mt-2">
                Our blockchain-based process streamlines property transactions,
                reducing the time from listing to closing from months to days
              </p>
            </div>

            <div>
              <h3 className="text-sm text-black font-semibold flex flex-row  items-center ">
                <div className="border w-3 h-3 rounded-full flex items-center">
                  <Check className="w-2 h-2" />
                </div>

                <span className="ml-3"> Reduced Fees</span>
              </h3>

              <p className="text-gray-600 mb-4 text-[11px] text-gray-500 mt-2">
                By eliminating unnecessary intermediaries, we significantly
                reduce transaction fees, saving buyers and sellers thousands of
                dollars.
              </p>
            </div>

            <div>
              <h3 className="text-sm text-black font-semibold flex flex-row  items-center ">
                <div className="border w-3 h-3 rounded-full flex items-center">
                  <Check className="w-2 h-2" />
                </div>

                <span className="ml-3"> Global Accessibility</span>
              </h3>
              <p className="text-gray-600 mb-4 text-[11px] text-gray-500 mt-2">
                Harmony supports international property transactions, making it
                easier for buyers and sellers to engage in cross-border real
                estate deals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black">
            Our Team
          </h2>
          <p className="text-center my-3 text-gray-500">
            Meet the experts behind Harmony
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <User className="text-black w-20" />
              </div>
              <h3 className="font-semibold text-black text-sm">
                Sarah Johnson
              </h3>
              <p className="text-gray-600 text-[10px]">CEO & Founder</p>
              <h3 className="text-gray-500 text-[9px]">
                Former real estate executive with 15 years of experience.
                Blockchain enthusiast and advocate for transparent property
                transactions
              </h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <User className="text-black w-20" />
              </div>
              <h3 className="font-semibold text-black text-sm">Michael Chen</h3>
              <p className="text-gray-600 text-[10px]">CTO</p>
              <h3 className="text-gray-500 text-[9px]">
                Blockchain developer with expertise in Stellar. Previously led
                engineering teams at major tech companies.
              </h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <User className="text-black w-20" />
              </div>
              <h3 className="font-semibold text-black text-sm">
                Elena Rodriquez
              </h3>
              <p className="text-gray-600 text-[10px]">Head of Operations</p>
              <h3 className="text-gray-500 text-[9px]">
                Real estate attorney specializing in international property law
                and digital asset regulations.
              </h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <User className="text-black w-20" />
              </div>
              <h3 className="font-semibold text-black text-sm">David kim</h3>
              <p className="text-gray-600 text-[10px]">Chief Product Officer</p>
              <h3 className="text-gray-500 text-[9px]">
                Product leader with experience in fintech and proptech.
                Passionate about creating intuitive user experiences.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Future Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl text-black font-bold">
                Join the Future of Real Estate
              </h2>
              <p className="text-gray-600 leading-relaxed my-2 text-sm">
                Be part of the revolution in property transactions with
                Harmony's blockchain-based platform.
              </p>
              <div className="flex flex-row ">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Create Account
              </button>
              <button className="border ml-5 border-gray-500 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Us
              </button>
              </div>
              
            </div>

            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
