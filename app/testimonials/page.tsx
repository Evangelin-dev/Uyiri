"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Hello Although I did not meet Dr. Uyiri in person, I had a consultation with him through Zoom meeting, and the simple remedies and tips he suggested to me are life-changing. My sleep schedule is better, my skin become clear with no breakouts, my appetite is better in terms of not feeling hungry as before for managing weight, and I feel energetic, active, and fresh. His practice is very simple and natural, and it feels like a part of my life now. His charges are very nominal, but his consultation is worth taking. May God bless him for helping people and offering guidance through lifestyle changes.",
    name: "Shazia, Saudi Arabia",
  },
  {
    quote:
      "Thank you sooo much, Misbah, for arranging the meeting with the Dr.Uyiri . It was totally a different experience. Mostly when I go to the doctors, when I come out of the chamber I feel... I'm so sick, mentally fatigued. But here, my entire vibes changed — such a positive person. I felt he was... less a doctor, more a healer... discussing the life hacks to live a healthy life. Came home with all positive vibes and the knowledge to live healthy. Thanks dear",
    name: "Nilanjana.",
  },
  {
    quote:
      "Thank you Dr.Uyiri for telling me that I should focus only my self. I should feel no one else exists and take care of my health and myself as it’s my responsibility. Thanks for telling everything is created by me only and I have to focus not getting trapped in negative. Thanks again I’m feeling better and postive.",
    name: "Mrs.Ruchi, USA",
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Real Stories. <span className="text-bright-pink">Real Healing.</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div className="min-h-[400px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center absolute w-full"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-600 italic text-lg mb-6">"{testimonials[index].quote}"</p>
                <div className="text-sm text-gray-500">{testimonials[index].name}</div>
                <div className="text-xs bg-sage-green/20 text-sage-green mt-3 px-3 py-1 inline-block rounded-full">
                  Verified by team Uyiri Healing
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-10 relative z-10">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
