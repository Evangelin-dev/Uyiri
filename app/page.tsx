"use client"
import Typewriter from "typewriter-effect"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Leaf } from "lucide-react"
import Link from "next/link"
import TestimonialCarousel from "@/app/Home/home_testimonials/page"
import DoctorAchievements from "@/app/Home/about/page"
import WorkWithSection from "@/app/Home/home_card/page"
import SignatureProgramsSection from "./Home/signatureprog/page"
import MeetDrUyiriSection from "./Home/intro_dr.uyiri/page"

export default function AyurvedicHomepage() {
  const [scrolled, setScrolled] = useState(false)
  const detoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToDetox = () => {
    detoxRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const pinkStyle = "bg-bright-pink hover:bg-bright-pink/90"
  const greenStyle1 = "bg-sage-green hover:bg-sage-green/90"
  const greenStyle2 = "bg-light-green hover:bg-light-green/90"

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800">
              <Typewriter
                options={{ delay: 40, cursor: "|", autoStart: true, loop: false }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Empowering Women Through ")
                    .pauseFor(300)
                    .typeString('<span class="text-bright-pink">Siddha Healing</span>')
                    .start()
                }}
              />
            </h1>

            <h2 className="text-sage-green text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
              A 21-Year Legacy of Holistic Wellness
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cancer, Uterine & Genetic Disorders Treated with Bio-Siddha Medicine
              <span className="text-sage-green font-semibold"> Global Reach, Local Roots</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link href={"/book-appointment"}>
                <Button
                  size="lg"
                  className={`${scrolled ? greenStyle1 : pinkStyle} text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group min-w-[200px]`}
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Book Appointment
                </Button>
              </Link>

              <Button
                onClick={scrollToDetox}
                size="lg"
                className={`${scrolled ? greenStyle1 : pinkStyle} text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group min-w-[200px]`}
              >
                <Leaf className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore Detox Programs
              </Button>

              <a
                href={`https://api.whatsapp.com/send?phone=919941882731&text=${encodeURIComponent(
                  "Name:\nEmail ID:\nYour Enquiry:"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px] w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className={`${scrolled ? greenStyle2 : pinkStyle} text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full`}
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  WhatsApp Now
                </Button>
              </a>
            </div>

            <div className="pt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-bright-pink rounded-full animate-pulse"></div>
                <span>21+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                <span>1000+ Women Healed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-light-green rounded-full animate-pulse"></div>
                <span>Global Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction to Dr. Uyirinayan */}
      <MeetDrUyiriSection />

      {/* Section 2: Signature Programs with scroll target */}
      <div ref={detoxRef}>
        <SignatureProgramsSection />
      </div>

      {/* Section 3: Patient Testimonials */}
      <TestimonialCarousel />

      {/* Section 4: Work With Me */}
      <WorkWithSection />

      {/* Section 6: About Dr. Uyirinayan Preview */}
      <DoctorAchievements />

      {/* Section 5: Book Appointment CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Ready to Begin Your <span className="text-bright-pink">Healing Journey?</span>
            </h2>
            <Link href={"/book-appointment"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-bright-pink to-sage-green hover:from-bright-pink/90 hover:to-sage-green/90 text-white px-12 py-6 text-xl rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-pulse"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
