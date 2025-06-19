"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Sparkles, Play, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Canada 🇨🇦",
      story:
        "After 3 years of irregular periods and painful cycles, I was losing hope. Dr. Uyirinayan's 10-day Womb Cleanse program completely transformed my life. Within the first week, I noticed changes in my energy levels. By the end of the program, my periods became regular for the first time in years. I feel like myself again and have recommended this to all my friends struggling with similar issues.",
      outcome: "Regular periods restored after 3 years",
      program: "Womb Cleanse Program",
      hasVoiceNote: true,
      featured: true,
    },
    {
      id: 2,
      name: "Priya K.",
      location: "India 🇮🇳",
      story:
        "I struggled with hormonal imbalances for over 5 years - mood swings, weight gain, skin issues, everything. The Shuddhi program was a game-changer. Dr. Uyirinayan's personalized approach and daily guidance helped me understand my body better. The herbal teas and breathwork became part of my daily routine. Now, 6 months later, my hormones are balanced, my skin is clear, and I feel emotionally stable.",
      outcome: "Hormonal balance achieved after 5 years of struggle",
      program: "Shuddhi Program",
      hasVoiceNote: false,
      featured: false,
    },
    {
      id: 3,
      name: "Emma L.",
      location: "Australia 🇦🇺",
      story:
        "PCOD had taken over my life - irregular periods, weight gain, hair loss, and fertility concerns. I tried everything from conventional medicine to various diets. The Womb Cleanse program was my last hope. Dr. Uyirinayan's approach was so different - he treated the root cause, not just symptoms. After completing the program, my PCOD symptoms disappeared. I'm now pregnant with my first child!",
      outcome: "PCOD symptoms resolved, achieved pregnancy",
      program: "Womb Cleanse Program",
      hasVoiceNote: true,
      featured: false,
    },
    {
      id: 4,
      name: "Maria R.",
      location: "USA 🇺🇸",
      story:
        "Post-pregnancy, my body felt completely out of balance. I was dealing with postpartum depression, irregular cycles, and extreme fatigue. The Uterus Reset program helped me reclaim my body and mind. The combination of raw foods, meditation, and personalized herbs worked like magic. I feel stronger and more balanced than I did before pregnancy.",
      outcome: "Complete postpartum recovery and renewed energy",
      program: "Uterus Reset Program",
      hasVoiceNote: false,
      featured: false,
    },
    {
      id: 5,
      name: "Aisha P.",
      location: "UAE 🇦🇪",
      story:
        "Endometriosis had made my life unbearable - severe pain, heavy bleeding, and it was affecting my work and relationships. After 2 surgeries with no lasting relief, I found Dr. Uyirinayan. His holistic approach through the Womb Cleanse program addressed not just the physical symptoms but also the emotional trauma. Today, I'm pain-free and my quality of life has improved dramatically.",
      outcome: "Endometriosis pain eliminated naturally",
      program: "Womb Cleanse Program",
      hasVoiceNote: true,
      featured: false,
    },
  ]

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
              <Link href="/testimonials" className="text-bright-pink underline underline-offset-4 font-medium">
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
              Real Stories. <span className="text-bright-pink">Real Healing.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover how women from around the world have transformed their health through Dr. Uyirinayan's Siddha
              healing programs. These are their authentic stories of recovery and renewal.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {testimonials
        .filter((testimonial) => testimonial.featured)
        .map((testimonial) => (
          <section key={testimonial.id} className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Badge className="mb-4 bg-bright-pink/10 text-bright-pink hover:bg-bright-pink/20">
                  Featured Transformation
                </Badge>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3 text-center">
                        <div className="w-24 h-24 bg-bright-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Quote className="h-12 w-12 text-bright-pink" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{testimonial.name}</h3>
                        <p className="text-gray-600 mb-2">{testimonial.location}</p>
                        <Badge variant="outline" className="border-bright-pink text-bright-pink mb-4">
                          {testimonial.program}
                        </Badge>
                        {testimonial.hasVoiceNote && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Listen to Voice Note
                          </Button>
                        )}
                      </div>
                      <div className="md:w-2/3">
                        <Quote className="h-8 w-8 text-bright-pink/30 mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">{testimonial.story}</p>
                        <div className="bg-sage-green/10 p-4 rounded-lg">
                          <h4 className="font-semibold text-sage-green mb-2">Transformation Result:</h4>
                          <p className="text-gray-700">{testimonial.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ))}

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              More <span className="text-bright-pink">Transformation Stories</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials
                .filter((testimonial) => !testimonial.featured)
                .map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="outline" className="border-bright-pink text-bright-pink text-xs">
                            {testimonial.program}
                          </Badge>
                          {testimonial.hasVoiceNote && (
                            <Button variant="ghost" size="sm" className="text-sage-green hover:bg-sage-green/10 p-1">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <Quote className="h-6 w-6 text-bright-pink/30 mb-3" />
                      <p className="text-gray-700 leading-relaxed mb-4 italic">{testimonial.story}</p>

                      <div className="bg-light-green/10 p-3 rounded-lg">
                        <h4 className="font-semibold text-light-green mb-1 text-sm">Result:</h4>
                        <p className="text-gray-700 text-sm">{testimonial.outcome}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                        <span className="text-xs bg-sage-green/20 text-sage-green px-2 py-1 rounded-full">
                          Verified by team Uyiri Healing
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Write Your Own <span className="text-bright-pink">Success Story?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of women who have transformed their health through Dr. Uyirinayan's proven Siddha healing
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-bright-pink hover:bg-bright-pink/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
