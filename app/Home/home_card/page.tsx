"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const pop3DVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
}

export default function WorkWithSection() {
  const cards = [
    {
      title: "Video Consult",
      desc: "Connect from anywhere in the world for personalized Siddha healing guidance",
    },
    {
      title: "Clinic Visit",
      desc: "Visit our clinic in Tamil Nadu for comprehensive in-person treatment",
    },
    {
      title: "Join Detox Program",
      desc: "Start your healing journey with our signature detox programs",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Work With <span className="text-bright-pink">GENETICIST.DR. G.M.UYIRINIYAN</span>
          </h2>
          <p className="text-xl text-gray-600">Available Online & In-Person</p>
        </div>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {cards.map((card, index) => (
            <PopCard3D key={index} title={card.title} desc={card.desc} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PopCard3D({
  title,
  desc,
  delay,
}: {
  title: string
  desc: string
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      variants={pop3DVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col justify-center items-center min-h-[320px]"
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform, opacity, filter",
      }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 flex-grow flex items-center text-center">{desc}</p>
      <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
        Book Now
      </Button>
    </motion.div>
  )
}
