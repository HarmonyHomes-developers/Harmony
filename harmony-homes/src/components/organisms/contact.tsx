"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-background px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Harmony</h1>
          <p className="text-muted-foreground text-center mb-8">
            Have questions about Harmony? We're here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-secondary p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-border rounded bg-background text-foreground"
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-border rounded bg-background text-foreground"
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 border border-border rounded bg-background text-foreground"
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary-hover transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-secondary p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Reach out to us through any of these channels
              </p>

              <div className="space-y-6">
                {/* Email Contact */}
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-background w-fit h-fit">
                    <Mail className="text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <p className="text-muted-foreground">support@harmonyhomes.com</p>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-background w-fit h-fit">
                    <Phone className="text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-background w-fit h-fit">
                    <MapPin className="text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123 Blockchain Avenue, Tech City, Innovation State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ Items */}
              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">How does Harmony use blockchain?</h3>
                <p className="text-muted-foreground text-sm">
                  We use Stellar blockchain to record and verify property transactions, 
                  ensuring transparency, security, and immutability of records.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely. We implement multi-factor authentication and advanced 
                  encryption to protect your personal and transaction data.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">What regions do you support?</h3>
                <p className="text-muted-foreground text-sm">
                  Harmony supports international real estate transactions, 
                  with a growing network of verified properties across multiple countries.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
