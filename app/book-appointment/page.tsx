"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Video, MapPin, Sparkles, Clock, User, Mail, Phone, MessageCircle, Leaf, Heart } from "lucide-react"
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
      

      {/* Hero Section */}
      
      <section className="py-20 bg-white">
        <div className="absolute inset-0 z-0">
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink/10 rounded-full animate-float opacity-20"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-pink/15 rounded-full animate-float-delayed opacity-15"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink/8 rounded-full animate-slow-pulse opacity-25"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink/12 rounded-full animate-gentle-bounce opacity-20"></div>

          {/* Floating Ayurvedic Icons */}
          <div className="absolute top-32 right-10 animate-float opacity-10">
            <Leaf className="h-12 w-12 text-pink" />
          </div>
          <div className="absolute top-1/2 left-16 animate-float-delayed opacity-15">
            <Heart className="h-10 w-10 text-pink" />
          </div>
          <div className="absolute bottom-32 right-16 animate-gentle-bounce opacity-12">
            <Sparkles className="h-14 w-14 text-pink" />
          </div>
          <div className="absolute top-1/3 left-1/3 animate-slow-pulse opacity-8">
            <div className="w-6 h-6 bg-pink rounded-full"></div>
          </div>
        </div>
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
                <Video className="h-12 w-12 text-sage-green mx-auto mb-4" />
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
