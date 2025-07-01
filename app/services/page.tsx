"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  GraduationCap,
  Heart,
  Users,
} from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function ServicesPage() {
  const services = [
    {
      icon: <GraduationCap className="h-16 w-16 text-bright-pink mx-auto" />,
      title: "Training Programs",
      description:
        "Siddha-based workshops & certification courses for doctors, therapists, and wellness seekers.",
      bullets: [
        "Professional certification courses",
        "Hands-on workshop experiences",
        "Ancient wisdom meets modern practice",
        "Continuing education credits available",
      ],
    },
    {
      icon: <Heart className="h-16 w-16 text-bright-pink mx-auto" />,
      title: "Counseling Sessions",
      description:
        "1-on-1 sessions for emotional well-being, lifestyle alignment, and chronic disease support.",
      bullets: [
        "Emotional wellness guidance",
        "Lifestyle alignment coaching",
        "Chronic disease support",
        "Personalized healing plans",
      ],
    },
    {
      icon: <Users className="h-16 w-16 text-bright-pink mx-auto" />,
      title: "Therapeutic Siddha Massage",
      description:
        "Holistic body therapies using herbal oils for stress, pain, and hormonal balance.",
      bullets: [
        "Traditional herbal oil treatments",
        "Stress and pain relief",
        "Hormonal balance therapy",
        "Customized treatment plans",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Healing Beyond Consults –{" "}
              <span className="text-bright-pink">The Uyiri Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover comprehensive healing services that go beyond traditional consultations. Our holistic approach
              combines ancient Siddha wisdom with modern therapeutic practices.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100">
                  <CardHeader className="text-center pb-4">
                    <div className="text-5xl mb-4 group-hover:animate-bounce">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 text-center">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2 text-sm text-gray-600">
                      {service.bullets.map((bullet, bIndex) => (
                        <p key={bIndex}>• {bullet}</p>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Link href="/book-appointment">
                        <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
