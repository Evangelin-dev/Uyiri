"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"

const fadeInUpWithDelay: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: custom as number,
    },
  }),
}

// Custom CTA text for each item
const introItems = [
  {
    title: "21 Years Experience",
    desc: "Siddha clinical practice",
    type: "book",
    cta: "Book Now",
  },
  {
    title: "15+ Countries",
    desc: "Global patient reach",
    type: "book",
    cta: "Start Booking",
  },
  {
    title: "Video Consultant",
    desc: "Talk to Uyiri via WhatsApp",
    type: "video",
    cta: "Book Now on WhatsApp",
  },
]

export default function MeetDrUyiriSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpWithDelay}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet GENETICIST.DR. G.M.UYIRINIYAN –{" "}
              <span className="text-bright-pink">The Heart of Uyiri Healing</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              GENETICIST.DR. G.M.UYIRINIYAN brings over 21 years of clinical experience in Siddha healing,
              transforming women's health across 15+ countries. A teacher, researcher, and visionary,
              he's on a mission to revive the sacred science of Siddha through holistic care,
              herbal innovation, and education.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {introItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpWithDelay}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between items-center text-center h-full"
              >
                <div>
                  <h3 className="text-xl font-bold text-sage-green mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>

                <div className="mt-6 w-full">
                  {item.type === "video" ? (
                    <a
                      href="https://api.whatsapp.com/send?phone=919941882731&text=Hi%2C%20I%20would%20like%20a%20video%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full bg-sage-green hover:bg-sage-green/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                        {item.cta}
                      </button>
                    </a>
                  ) : (
                    <Link href="/book-appointment">
                      <button className="w-full bg-sage-green hover:bg-sage-green/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                        {item.cta}
                      </button>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
