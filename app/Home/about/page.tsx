"use client"

import { motion } from "framer-motion"
import { Sparkles, Globe, BookOpen, Leaf } from "lucide-react"

export default function DoctorAchievements() {
  const cardData = [
    {
     
      title: "21 Years",
      subtitle: "of clinical Siddha practice",
    },
    {
     
      title: "15+ Countries",
      subtitle: "Patients treated across the globe",
    },
    {
    
      title: "Teacher & Researcher",
      subtitle: "Advocate for Siddha revival",
    },
    {
     
      title: "Founder",
      subtitle: "The Bio-Sithan Institute & Uyirati Herbal Market",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
        >
          Meet <span className="text-bright-pink">GENETICIST.DR. G.M.UYIRINIYAN</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_0_20px_-5px_rgba(255,0,128,0.2)] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                
                <h3 className="text-xl font-bold text-sage-green mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
