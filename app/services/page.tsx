"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, Sparkles, Users, Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-pink/20">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-bright-pink animate-pulse" />
            <span className="text-sm font-medium text-gray-700 hover:text-bright-pink transition-colors cursor-pointer">
              👉 Introducing the 10-Day Uterus Detox Program
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-sage-green text-white border-sage-green hover:bg-sage-green/90 transition-all duration-300 hover:scale-105"
          >
            Visit Our Store
          </Button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/uyiri-logo.png"
                alt="Uyiri Healing Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold text-bright-pink">uyirihealing</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
                Home
              </Link>
              <Link href="/services" className="text-bright-pink underline underline-offset-4 font-medium">
                Services
              </Link>
              <Link
                href="/#signature-programs"
                scroll={true}
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
                Signature Programs
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/book-appointment"
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
                Book Appointment
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Healing Beyond Consults – <span className="text-bright-pink">The Uyiri Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover comprehensive healing services that go beyond traditional consultations. Our holistic approach
              combines ancient Siddha wisdom with modern therapeutic practices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Training Programs */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  <GraduationCap className="h-16 w-16 text-bright-pink mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-center">
                  Siddha-based workshops & certification courses for doctors, therapists, and wellness seekers.
                </CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Professional certification courses</p>
                  <p>• Hands-on workshop experiences</p>
                  <p>• Ancient wisdom meets modern practice</p>
                  <p>• Continuing education credits available</p>
                </div>
                <div className="pt-4 space-y-3">
                  <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                    Enroll Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-bright-pink text-bright-pink hover:bg-bright-pink/10 rounded-full py-3 font-semibold"
                  >
                    View Curriculum
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Counseling Sessions */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  <Heart className="h-16 w-16 text-bright-pink mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Counseling Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-center">
                  1-on-1 sessions for emotional well-being, lifestyle alignment, and chronic disease support.
                </CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Emotional wellness guidance</p>
                  <p>• Lifestyle alignment coaching</p>
                  <p>• Chronic disease support</p>
                  <p>• Personalized healing plans</p>
                </div>
                <div className="pt-4 space-y-3">
                  <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">

                    Book Session
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-bright-pink text-bright-pink hover:bg-bright-pink/10 rounded-full py-3 font-semibold"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Therapeutic Siddha Massage */}
            <Card className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  <Users className="h-16 w-16 text-bright-pink mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Therapeutic Siddha Massage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-center">
                  Holistic body therapies using herbal oils for stress, pain, and hormonal balance.
                </CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Traditional herbal oil treatments</p>
                  <p>• Stress and pain relief</p>
                  <p>• Hormonal balance therapy</p>
                  <p>• Customized treatment plans</p>
                </div>
                <div className="pt-4 space-y-3">
                  <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                    Book Treatment
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-bright-pink text-bright-pink hover:bg-bright-pink/10 rounded-full py-3 font-semibold"
                  >
                    View Packages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Experience <span className="text-bright-pink">Holistic Healing?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose the service that resonates with your healing journey and take the first step towards wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-bright-pink hover:bg-bright-pink/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
