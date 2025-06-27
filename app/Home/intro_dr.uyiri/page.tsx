"use client"

import { motion, Variants } from "framer-motion"

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

const introItems = [
  {
    title: "21 Years Experience",
    desc: "Siddha clinical practice",
  },
  {
    title: "15+ Countries",
    desc: "Global patient reach",
  },
  {
    title: "Founder",
    desc: "Bio-Sithan Institute & Uyirati Herbal Market",
  },
]

export default function MeetDrUyiriSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          {/* Heading and description */}
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

          {/* Timeline Cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {introItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpWithDelay}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center text-center h-full"
              >
                <h3 className="text-xl font-bold text-sage-green mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
