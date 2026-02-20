"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, Search, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJwrOpen, setIsJwrOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsJwrOpen(false);
      }
    };

    if (isMenuOpen || isJwrOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isJwrOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top promotional bar */}
        <div
          className="text-white text-center py-2 text-xs tracking-widest uppercase"
          style={{ backgroundColor: "#c8a97e" }}
        >
          Free Shipping on Orders Above $1000 &nbsp;|&nbsp; 100% Payment Secure
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="text-2xl font-bold tracking-wide"
              style={{ color: "#c8a97e" }}
            >
              Alnoor Jewellers
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition-colors tracking-wide"
            >
              Home
            </Link>

            {/* Jewelry Dropdown trigger */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition-colors tracking-wide"
                onMouseEnter={() => setIsJwrOpen(true)}
                onClick={() => setIsJwrOpen(!isJwrOpen)}
              >
                Products <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega-style dropdown or direct list */}
              <div
                className={`absolute left-0 mt-4 w-64 bg-white border border-gray-100 shadow-xl py-4 transition-all duration-300 transform ${
                  isJwrOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                onMouseLeave={() => setIsJwrOpen(false)}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/collections?category=${cat}`}
                    onClick={() => setIsJwrOpen(false)}
                    className="block px-6 py-2.5 text-xs tracking-widest uppercase text-gray-600 hover:bg-gray-50 hover:text-[#c8a97e] transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
                <div className="border-t border-gray-50 mt-2 pt-2">
                  <Link
                    href="/collections"
                    onClick={() => setIsJwrOpen(false)}
                    className="block px-6 py-2.5 text-xs tracking-widest uppercase text-[#c8a97e] font-bold"
                  >
                    View All Collections
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/sale"
              className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors tracking-wide uppercase"
            >
              Sale
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition-colors tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition-colors tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex hover:text-[#c8a97e]"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-[#c8a97e]"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-[#c8a97e]"
              onClick={openCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span
                  className="absolute top-1 right-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
                  style={{ backgroundColor: "#c8a97e" }}
                >
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1 border-t border-gray-100 pt-3 animate-in slide-in-from-top duration-300">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition"
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                Jewelry Categories
              </p>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-gray-100">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/collections?category=${cat}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs text-gray-600 py-1 hover:text-[#c8a97e]"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/sale"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-bold text-red-600 hover:text-red-700 transition"
            >
              Sale
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#c8a97e] transition"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
