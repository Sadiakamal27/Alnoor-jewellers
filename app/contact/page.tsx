"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import FeaturesSection from "@/components/FeaturesSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-20 px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c8a97e] mb-3">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
          Contact Us
        </h1>
        <div className="w-16 h-px bg-[#c8a97e] mx-auto" />
      </section>

      <section className="py-24 px-4 sm:px-8 lg:px-16 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                Visit Our Showroom
              </h2>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Step into a world of elegance. Our flagship store displays our
                most exclusive collections and provides bespoke jewelry
                services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#c8a97e]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Main Boulevard, Liberty Market,
                    <br />
                    Gulberg III, Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#c8a97e]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                    Call/WhatsApp
                  </h3>
                  <p className="text-gray-600 text-sm">
                    +92 320 5691000
                    <br />
                    +92 42 111 222 333
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#c8a97e]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 text-sm">
                    info@alnoorjewellers.pk
                    <br />
                    support@alnoorjewellers.pk
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#c8a97e]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mon - Sat: 11:00 AM - 9:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#fcfaf7] p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              Send A Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-[#c8a97e] outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-[#c8a97e] outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-[#c8a97e] outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Subject
                </label>
                <select className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-[#c8a97e] outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Bespoke Design</option>
                  <option>Bridal Consultation</option>
                  <option>After Sale Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-[#c8a97e] outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full bg-gray-900 text-white py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#c8a97e] transition-colors shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-400 font-light italic">
            Interactive Map Integration
          </p>
        </div>
      </section>
    </main>
  );
}
