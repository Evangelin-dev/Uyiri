"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, Users, Calendar, MessageCircle, Leaf, Sparkles } from "lucide-react"
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
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
