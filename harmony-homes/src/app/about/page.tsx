import React from "react";
import { Eye, Lock, User, Globe, Check } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Transforming Real Estate with Blockchain
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center">
          Harmony is revolutionizing property transactions through transparent, secure, and efficient blockchain technology.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-background">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto text-center">
          To democratize real estate transactions by leveraging blockchain technology, 
          ensuring transparency, reducing costs, and providing global accessibility.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          <p className="text-muted-foreground text-center my-2">
            Innovative solutions that set us apart
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="text-center bg-background p-4 rounded">
              <div className="bg-secondary w-10 h-10 mx-auto rounded-full mb-4 flex items-center justify-center">
                <Eye className="text-foreground" />
              </div>
              <h3 className="text-sm font-semibold mb-2">Transparent Transactions</h3>
              <p className="text-muted-foreground text-center">
                Every transaction is recorded on the blockchain, ensuring complete transparency.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-background p-4 rounded">
              <div className="bg-secondary w-10 h-10 mx-auto rounded-full mb-4 flex items-center justify-center">
                <Lock className="text-foreground" />
              </div>
              <h3 className="text-sm font-semibold mb-2">Secure Authentication</h3>
              <p className="text-muted-foreground">
                Multi-factor authentication and advanced security measures protect your account.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-background p-4 rounded">
              <div className="bg-secondary w-10 h-10 mx-auto rounded-full mb-4 flex items-center justify-center">
                <Globe className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
              <p className="text-muted-foreground">
                Access properties worldwide with support for international transactions.
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
      <section className="bg-background py-16">
        <h2 className="text-3xl font-bold text-center">Our Team</h2>
        <p className="text-muted-foreground text-center my-3">
          Meet the innovators behind Harmony
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12 container mx-auto">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="bg-secondary h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
              <User className="text-foreground w-20" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Sarah Johnson</h3>
            <p className="text-muted-foreground text-[10px]">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="bg-secondary h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
              <User className="text-foreground w-20" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Michael Chen</h3>
            <p className="text-muted-foreground text-[10px]">CTO</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="bg-secondary h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
              <User className="text-foreground w-20" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Emily Rodriguez</h3>
            <p className="text-muted-foreground text-[10px]">Head of Operations</p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center">
            <div className="bg-secondary h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
              <User className="text-foreground w-20" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">David Kim</h3>
            <p className="text-muted-foreground text-[10px]">Chief Product Officer</p>
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
