"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter */}
      <section className="border-b border-gray-800 py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter and get 5% off your first purchase
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button
                className="text-white px-6"
                style={{ backgroundColor: "#c8a97e" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#b8966b")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c8a97e")
                }
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer content */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Alnoor Jewels</h4>
              <p className="text-gray-400 text-sm mb-4">
                Where every gem has a story, and every visit is a journey.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:info@heritagejewels.com.pk"
                  className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition"
                >
                  <Mail className="h-4 w-4" /> info@alnoor.pk
                </a>
                <a
                  href="tel:+923205691000"
                  className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition"
                >
                  <Phone className="h-4 w-4" /> +92 320 5691000
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Contact Us",
                  "About Us",
                  "Store Locator",
                  "How to Order",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-lg font-bold mb-4">Information</h4>
              <ul className="space-y-2">
                {[
                  "After Sale Service",
                  "Return & Exchange",
                  "Jewelry Care",
                  "FAQs",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Shipping Policy",
                  "Refund Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social media */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Alnoor Jewels. All rights reserved.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="bg-gray-800 p-3 rounded-full transition hover:opacity-80"
                    style={{ backgroundColor: undefined }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#c8a97e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1f2937")
                    }
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
