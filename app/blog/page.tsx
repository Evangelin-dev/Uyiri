"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Sparkles, MessageCircle, Leaf, Heart } from "lucide-react"
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
