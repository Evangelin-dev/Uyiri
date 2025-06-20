"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, Users, Calendar, MessageCircle, Leaf,  } from "lucide-react"
export default function ServicesPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 ">
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
      <section className="py-20">
        
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
      <section className="py-20 ">
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
