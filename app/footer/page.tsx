"use client";

import React, { useState } from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

// Reusable CopyToClipboard component
const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="hover:text-pink-600 underline focus:outline-none"
      title="Click to copy"
    >
      {copied ? "Copied!" : text}
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-pink-100 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">uyirihealing</h2>
          <p className="text-sm mt-2 text-gray-600">
            Empowering Women Through Siddha Healing.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} UyiriHealing. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-pink-600">Services</Link></li>
            <li><Link href="/signature-programs" className="hover:text-pink-600">Signature Programs</Link></li>
            <li><Link href="/blog" className="hover:text-pink-600">Blog</Link></li>
            <li><Link href="/book-appointment" className="hover:text-pink-600">Book Appointment</Link></li>
            <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2 font-medium">
              <Phone className="w-4 h-4 text-pink-500" />
              <CopyToClipboard text="+91 9941 88 2731" />
            </li>
            <li className="flex items-center gap-2 font-medium">
              <Phone className="w-4 h-4 text-pink-500" />
              <CopyToClipboard text="+91 9385 818 718" />
            </li>
            <li className="flex items-center gap-2 font-medium">
              <Mail className="w-4 h-4 text-pink-500" />
              <CopyToClipboard text="druyiriniyan@gmail.com" />
            </li>
            <li className="flex items-center gap-2 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm1 17.93c-1.23.24-2.5.24-3.73 0-.31-.06-.53-.36-.47-.67.18-1.03.77-2.57 2.33-2.57s2.15 1.54 2.33 2.57c.06.31-.16.61-.46.67zM17 13h-2v-2h2v2zm-8 0H7v-2h2v2zm6.19-6.81C13.45 4.5 10.55 4.5 8.81 6.19c-1.39 1.39-1.52 3.51-.43 5.03h7.25c1.09-1.52.96-3.64-.44-5.03z" />
              </svg>
              <Link
                href="https://uyirihealing.com"
                target="_blank"
                className="hover:text-pink-600 underline"
              >
                uyirihealing.com
              </Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex mt-4 gap-3">
            <Link href="https://www.instagram.com/dr.uyiriniyan/" target="_blank">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500" />
            </Link>
            <Link href="https://www.facebook.com/share/19qfSuMHVQ/" target="_blank">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-pink-500" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/terms-and-conditions" className="hover:text-pink-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-pink-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Designed by The Bot - Bottom Right */}
      <div className="absolute bottom-3 right-6 text-sm md:text-base font-semibold text-bright-pink">
        Designed by{" "}
        <Link
          href="https://www.thebot.agency/"
          target="_blank"
          className="text-pink-600 underline hover:text-pink-800"
        >
          The Bot
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
