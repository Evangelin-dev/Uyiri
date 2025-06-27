"use client"
import { motion, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay },
  }),
}

export default function SignatureProgramsSection() {
  const cards = [
    {
      title: "Womb Cleanse – 10-Day Natural Detox",
      description: [
        "• Uterine cleansing, pain relief, regularizing periods",
        "• Diet plan, herbs, voice notes, 1:1 consult",
      ],
      tag: "For PCOD, fibroids, painful cycles",
    },
    {
      title: "Shuddhi – Ayurvedic Detox for Women's Wellness",
      description: [
        "• Hormonal balance, emotional reset",
        "• Herbal teas, breathwork, daily guidance",
      ],
      tag: "For stress, skin, bloating, general wellness",
    },
    {
      title: "Uterus Reset – 10-Day Healing Journey",
      description: [
        "• Deep womb detox + energy balancing",
        "• Raw foods, meditations, personalized herbs",
      ],
      tag: "Ideal for postpartum recovery, fertility prep",
    },
  ]

  return (
    <section id="signature-programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Our <span className="text-bright-pink">Signature Healing Programs</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <AnimatedCard
              key={index}
              title={card.title}
              description={card.description}
              tag={card.tag}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCard({
  title,
  description,
  tag,
  delay,
}: {
  title: string
  description: string[]
  tag: string
  delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [inView])

  return (
    <motion.div
      ref={ref}
      custom={delay}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border border-gray-100 flex flex-col"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      </div>

      <div className="space-y-3 mb-8 flex-grow">
        {description.map((line, i) => (
          <p key={i} className="text-gray-600">
            {line}
          </p>
        ))}
        <div className="flex justify-center mt-4">
          <div className="bg-bright-pink/20 rounded-full px-4 py-2 text-center">
            <span className="text-sm font-semibold text-bright-pink">{tag}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-auto">
        <Button className="w-full bg-sage-green hover:bg-sage-green/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
          Join Now
        </Button>
        <Button
          variant="outline"
          className="w-full border-sage-green text-sage-green hover:bg-sage-green rounded-full py-3 font-semibold"
        >
          View Sample Plan
        </Button>
      </div>
    </motion.div>
  )
}
