"use client";

import React from "react";
import BookingForm from "../book-appointment/page"; // Adjust if path differs

const PrivacyPolicyPage = () => {
  return (
    <main className="relative text-gray-100">
      {/* Pink Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-pink-300 via-pink-500 to-purple-600 animate-gradient" />
        <style jsx>{`
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
          }

          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-4xl mx-auto px-6 md:px-24 py-20 relative z-10 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-bright-pink mb-6">Privacy Policy</h1>

        <section className="space-y-10 text-base leading-relaxed text-gray-800">
          <div>
            <h2 className="font-semibold text-lg mb-2">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Contact Details:</strong> Name, email, phone number, address.</li>
              <li><strong>Health Information:</strong> Provided during consultations or bookings.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and device information.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide Ayurvedic consultations and services.</li>
              <li>Book appointments and send reminders.</li>
              <li>Improve our website and user experience.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">3. Data Sharing and Disclosure</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Internal staff or healthcare professionals for service delivery.</li>
              <li>Regulatory or legal authorities when required by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">4. Security Measures</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">5. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Request access to your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at:{" "}
              <a
                href="mailto:druyiriniyan@gmail.com"
                className="text-pink-700 underline"
              >
                druyiriniyan@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">6. Contact Us</h2>
            <p className="mb-1">
              📧{" "}
              <a
                href="mailto:druyiriniyan@gmail.com"
                className="text-pink-700 underline"
              >
                druyiriniyan@gmail.com
              </a>
            </p>
            <p>
              📍{" "}
              <a
                href="https://www.google.com/maps?q=No+112,+Subramanya+Samy+Nagar,+Sammandham+Nagar+Main+Road,+Kundrathur,+Chennai+600069"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 underline"
              >
                No: 112, Subramanya Samy Nagar, Sammandham Nagar Main Road,
                Kundrathur, Chennai – 600069
              </a>
            </p>
          </div>
        </section>

        <div className="h-px bg-gray-300 my-16" />

        {/* Booking Form at the bottom */}
        <BookingForm />
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
