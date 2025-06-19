"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Video, MapPin, Sparkles, Clock, User, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function BookAppointmentPage() {
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    preferredDate: "",
    preferredTime: "",
    issue: "",
    serviceType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

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
              <Link
                href="/services"
                className="text-gray-700 hover:text-bright-pink transition-all duration-300 hover:underline underline-offset-4 font-medium"
              >
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
              <Link href="/book-appointment" className="text-bright-pink underline underline-offset-4 font-medium">
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
              Book Your <span className="text-bright-pink">Healing Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose your preferred consultation method and take the first step towards holistic wellness with Dr.
              Uyirinayan.
            </p>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Video Consult */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedService === "video" ? "ring-2 ring-bright-pink bg-bright-pink/5" : "hover:shadow-lg"
              }`}
              onClick={() => {
                setSelectedService("video")
                handleInputChange("serviceType", "Video Consult")
              }}
            >
              <CardHeader className="text-center">
                <Video className="h-12 w-12 text-bright-pink mx-auto mb-4" />
                <CardTitle className="text-xl font-bold">Video Consult</CardTitle>
                <CardDescription>Connect from anywhere in the world</CardDescription>
              </CardHeader>
            </Card>

            {/* Clinic Visit */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedService === "clinic" ? "ring-2 ring-sage-green bg-sage-green/5" : "hover:shadow-lg"
              }`}
              onClick={() => {
                setSelectedService("clinic")
                handleInputChange("serviceType", "Clinic Visit")
              }}
            >
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-sage-green mx-auto mb-4" />
                <CardTitle className="text-xl font-bold">Clinic Visit</CardTitle>
                <CardDescription>Visit our clinic in Tamil Nadu</CardDescription>
              </CardHeader>
            </Card>

            {/* Detox Program */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedService === "detox" ? "ring-2 ring-light-green bg-light-green/5" : "hover:shadow-lg"
              }`}
              onClick={() => {
                setSelectedService("detox")
                handleInputChange("serviceType", "Join Detox Program")
              }}
            >
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-light-green mx-auto mb-4" />
                <CardTitle className="text-xl font-bold">Join Detox Program</CardTitle>
                <CardDescription>Start your signature healing journey</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-800">Book Your Appointment</CardTitle>
                <CardDescription className="text-center">
                  Fill in your details and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        City *
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Preferred Time
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue">Describe Your Health Concern</Label>
                    <Textarea
                      id="issue"
                      value={formData.issue}
                      onChange={(e) => handleInputChange("issue", e.target.value)}
                      placeholder="Please describe your health concern or what you'd like to discuss..."
                      rows={4}
                    />
                  </div>

                  {selectedService && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        Selected Service: <span className="font-semibold text-bright-pink">{formData.serviceType}</span>
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
