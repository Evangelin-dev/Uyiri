"use client";

import React from "react";
import BookingForm from "../book-appointment/page";

const TermsAndConditionsPage = () => {
  return (
    <main className="relative text-gray-100">
      {/* Pink Animated Gradient Background */}
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

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-24 py-20 relative z-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-bright-pink mb-6">
          Terms & Conditions
        </h1>

        

        <section className="space-y-10 text-base leading-relaxed text-gray-800">
          <div>
            <h2 className="font-semibold text-lg mb-2">1. Nature of Services</h2>
            <p>
              Our services are based on traditional Ayurvedic and Siddha principles. They are not a substitute for professional medical diagnosis, emergency care, or treatment.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">2. Use of Information</h2>
            <p>
              All content shared via this site or during consultations is for informational purposes only. Individual results may vary.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">3. Eligibility</h2>
            <p>
              You must be 18 years or older to use our services. Minors may access services under the supervision of a parent or guardian.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">4. Bookings & Cancellations</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Appointments must be scheduled in advance.</li>
              <li>Cancellations must be made at least 24 hours prior to your slot.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">5. Intellectual Property</h2>
            <p>
              All website content—text, images, graphics, and media—is the property of UyiriHealing and protected by copyright laws.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">6. Limitation of Liability</h2>
            <p>
              UyiriHealing is not liable for any damages resulting from the use of our website or services, including decisions made based on the information provided.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">7. Changes to Terms</h2>
            <p>
              These terms may be updated from time to time. Continued use of our services implies your acceptance of the latest terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">8. Contact Us</h2>
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

        <div className="h-px w-full bg-gray-200 my-16" />

        {/* Booking form with heading */}
        
            <BookingForm />
          
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
