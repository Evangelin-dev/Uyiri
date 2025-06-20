"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Mail, Phone, MapPin, Clock, Sparkles, Send, Calendar, Leaf, Heart } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    issue: "",
    city: "",
    preferredTime: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission logic here
  }

  const handleWhatsApp = () => {
    const message = `Hello Dr. Uyirinayan, I would like to inquire about your services. 
    
Name: ${formData.name}
Issue: ${formData.issue}
City: ${formData.city}
Preferred Time: ${formData.preferredTime}`

    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen ">
      

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in <span className="text-bright-pink">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to start your healing journey? Reach out to us through any of the channels below. We're here to
              support your wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Connect with <span className="text-bright-pink">Dr. Uyirinayan</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose your preferred way to reach us. We respond to all inquiries within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-bright-pink/10 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-bright-pink" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Instant messaging & voice calls</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-sage-green/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-sage-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">hello@uyirihealing.com</p>
                      <p className="text-sm text-gray-500">Detailed inquiries & consultations</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-light-green/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-light-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Direct consultation booking</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-bright-pink/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-bright-pink" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Clinic Address</h3>
                      <p className="text-gray-600">Bio-Sithan Institute</p>
                      <p className="text-gray-600">Tamil Nadu, India</p>
                      <p className="text-sm text-gray-500">In-person consultations available</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Office Hours */}
              <Card className="p-6 bg-gray-50">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-bright-pink" />
                  <h3 className="font-semibold text-gray-800">Consultation Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency only</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue">Health Issue/Concern *</Label>
                      <Textarea
                        id="issue"
                        value={formData.issue}
                        onChange={(e) => handleInputChange("issue", e.target.value)}
                        placeholder="Describe your health concern or what you'd like to discuss..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Enter your city"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>

                      <div className="text-center text-gray-500">or</div>

                      <Button
                        type="button"
                        onClick={handleWhatsApp}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Now
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
