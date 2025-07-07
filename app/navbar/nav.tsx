"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }

      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/uyiri-logo.png"
                alt="Uyiri Healing Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold text-bright-pink">uyirihealing</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="nav-link flex items-center space-x-1 focus:outline-none"
              >
                <span>Signature Programs</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                  <Link
                    href="/uterus-detox"
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-bright-pink text-sm font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Uterus Detox
                  </Link>
                  <Link
                    href="/shuddhi"
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-bright-pink text-sm font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Shuddhi
                  </Link>
                  <Link
                    href="/WombCleanse"
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-bright-pink text-sm font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Womb Cleanse
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/book-appointment" className="nav-link">Book Appointment</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          ref={mobileRef}
          className="md:hidden bg-white border-t border-gray-200 shadow-md animate-fade-in px-4 pb-6"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <Link href="/" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/uterus-detox" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Uterus Detox</Link>
            <Link href="/shuddhi" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Shuddhi</Link>
            <Link href="/WombCleanse" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Womb Cleanse</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/book-appointment" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Book Appointment</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
