"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
      <p className="text-[#71717A] text-center mb-8">Have questions about Harmony? We&apos;re here to help.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <p className="text-[#71717A]">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-[#09090B] mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block my-2">Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 px-3 border border-[#E4E4E7] rounded-md"
                    required
                />
              </div>
              <div>
                <label className="block my-2">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 px-3 border border-[#E4E4E7] rounded-md"
                    required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block my-2">Phone (optional)</label>
                    <input
                    type="text"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 px-3 border border-[#E4E4E7] rounded-md"
                    />
                </div>
                <div>
                    <label className="block my-2">Subject</label>
                    <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 px-3 border border-[#E4E4E7] rounded-md"
                    required
                    >
                    <option value="">Select a subject</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="inquiry">General Inquiry</option>
                    </select>
                </div>
            </div>

            

            <div>
                <label className="block my-2">Message</label>
                <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 px-3 border border-[#E4E4E7] rounded-md h-28"
                required
                >

                </textarea>
            </div>

            

            <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800">
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Information & FAQ */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-[#71717A]">Reach out to us through any of these channels</p>
            <div className="flex space-x-3 my-3">
                <div className="p-2 rounded-full bg-gray-100 w-fit h-fit">
                    <Mail />
                </div>
                <div className="text-[#71717A]">
                    <p className="font-bold text-black">
                    Email
                    </p>
                    <p>
                    info@harmony.com
                    </p>
                    <p>
                    support@harmony.com
                    </p>
                </div>
            </div>
            <div className="flex space-x-3 my-3">
                <div className="p-2 rounded-full bg-gray-100 w-fit h-fit">
                    <Phone />
                </div>
                <div className="text-[#71717A]">
                    <p className="font-bold text-black">
                    Phone
                    </p>
                    <p>
                    +1 (555) 123-4567
                    </p>
                    <p>
                    Mon-Fri: 9am-5pm EST
                    </p>
                </div>
            </div>

            <div className="flex space-x-3 my-3">
                <div className="p-2 rounded-full bg-gray-100 w-fit h-fit">
                    <MapPin />
                </div>
                <div className="text-[#71717A]">
                    <p className="font-bold text-black">
                    Office
                    </p>
                    <p>
                    123 Blockchain Avenue
                    </p>
                    <p>
                    Suite 456
                    </p>
                    <p>
                    San Francisco, CA 94105
                    </p>
                </div>
            </div>
            
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-1">Frequently Asked Questions</h2>
            <p className="mb-6 text-[#71717A] text-sm">Quick answers to common questions</p>
            <div className="mb-2">
              <p className="font-semibold">How does blockchain verify property ownership?</p>
              <p className="text-[#71717A] text-sm">
                Harmony uses the Stellar blockchain to create immutable records of property ownership.
              </p>
            </div>
            <div className="mb-2">
              <p className="font-semibold mt-3">Is Harmony available internationally?</p>
              <p className="text-[#71717A] text-sm">
                Yes, Harmony supports international property transactions with compliance for various regulations.
              </p>
            </div>
            <div className="mb-2">
              <p className="font-semibold mt-3">How do I list my property on Harmony?</p>
              <p className="text-[#71717A] text-sm">
              Create an account, verify your identity, and follow our simple listing process to add your
              property to our blockchain-secured marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
