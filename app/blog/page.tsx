"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Your Uterus Needs a Detox",
      snippet:
        "Discover the ancient Siddha wisdom behind uterine cleansing and how modern lifestyle factors affect women's reproductive health. Learn the signs that indicate your body needs a reset.",
      image: "/placeholder.svg?height=300&width=400",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Women's Health",
      featured: true,
    },
    {
      id: 2,
      title: "3 Signs You Need Hormonal Reset",
      snippet:
        "Hormonal imbalances can manifest in subtle ways. Explore the three key indicators that suggest your hormones need rebalancing through natural Siddha medicine approaches.",
      image: "/placeholder.svg?height=300&width=400",
      date: "December 12, 2024",
      readTime: "4 min read",
      category: "Hormonal Health",
      featured: false,
    },
    {
      id: 3,
      title: "The Power of Siddha in Healing Genetic Disorders",
      snippet:
        "Uncover how traditional Siddha medicine addresses genetic predispositions and inherited health conditions through personalized herbal formulations and lifestyle modifications.",
      image: "/placeholder.svg?height=300&width=400",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Siddha Medicine",
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
              <Link href="/blog" className="text-bright-pink underline underline-offset-4 font-medium">
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
              Healing <span className="text-bright-pink">Wisdom</span> & Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore ancient Siddha wisdom, modern wellness insights, and practical guidance for your healing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts
        .filter((post) => post.featured)
        .map((post) => (
          <section key={post.id} className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Badge className="mb-4 bg-bright-pink/10 text-bright-pink hover:bg-bright-pink/20">
                  Featured Article
                </Badge>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div> 
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="border-bright-pink text-bright-pink">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.snippet}</p>
                      <Button className="bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full group">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        ))}

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Latest <span className="text-bright-pink">Articles</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{post.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-bright-pink transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.snippet}</p>
                      <Button
                        variant="outline"
                        className="border-bright-pink text-bright-pink hover:bg-bright-pink hover:text-white rounded-full group w-full"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Stay Updated with <span className="text-bright-pink">Healing Insights</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest articles on Siddha medicine, women's health, and holistic
              wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-bright-pink"
              />
              <Button className="bg-bright-pink hover:bg-bright-pink/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
