"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Leaf, Users, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-rose-900 mb-6 leading-tight hover:scale-105 transition-transform duration-300">
            10-Day Uterus Detox Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium animate-fade-in delay-150">
            A Natural Reset for Hormonal Balance, Period Pain Relief & Reproductive Vitality
          </p>
          
          <Card className="bg-white/80 shadow-lg border-rose-100 mb-12 hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl md:text-3xl text-rose-800 mb-6">
                Struggling with:
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Irregular or painful periods</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">PCOD, fibroids, or hormonal imbalance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Mood swings, fatigue, or bloating</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Fertility concerns or postpartum exhaustion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 mb-12 animate-fade-in delay-300">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              This Siddha-inspired 10-day detox is designed to cleanse, restore, and re-energize your womb naturally—without pills, invasive treatment, or extreme fasting.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="px-4 py-16 bg-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-rose-900 mb-12 animate-fade-in">
            What You'll Receive
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-rose-800 mb-3">
                  Daily Detox Meal Plan
                </h3>
                <p className="text-gray-600 text-sm">
                  Nourishing liquid-based plan with seasonal fruits & drinks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-rose-800 mb-3">
                  WhatsApp Group
                </h3>
                <p className="text-gray-600 text-sm">
                  Daily guidance, voice notes, community support
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-rose-800 mb-3">
                  Breathwork & Movement
                </h3>
                <p className="text-gray-600 text-sm">
                  Simple 10–15 min routines
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-rose-800 mb-3">
                  1-on-1 Closing Call
                </h3>
                <p className="text-gray-600 text-sm">
                  With Dr. Uyirinayan – Personal lifestyle support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-rose-100 to-pink-100 shadow-xl border-rose-200 hover:scale-105 transition-transform duration-300 animate-scale-in">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-rose-900 mb-4">
                Your Investment
              </h2>
              <div className="text-5xl md:text-6xl font-bold text-rose-800 mb-6">
                ₹999 <span className="text-lg font-normal text-gray-600">Only</span>
              </div>
              <Button 
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                <a href="#" className="no-underline">
                  Join the 10-Day Detox Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 bg-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-rose-900 mb-12 animate-fade-in">
            What Women Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "For the first time in years, I had a pain-free cycle."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-800 font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-800">Meena</p>
                    <p className="text-sm text-gray-600">Chennai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "My bloating and mood swings reduced within 4 days. I feel light and in control."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-800 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-800">Ayesha</p>
                    <p className="text-sm text-gray-600">Dubai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-300">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "This felt like my womb was talking to me again. Deeply grateful."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-800 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-800">Anita</p>
                    <p className="text-sm text-gray-600">Coimbatore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-rose-900 mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          
          <Card className="bg-white shadow-lg border-rose-100 animate-scale-in">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold text-rose-800">
                    Is this program online?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, the entire detox is guided via WhatsApp and voice notes.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold text-rose-800">
                    Do I need to fast?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    No. Gentle detox using fruit-based meals. No extreme fasting.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold text-rose-800">
                    Can I join with PCOD/fibroids?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes! Designed for hormonal and uterine challenges.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold text-rose-800">
                    Can I continue if I get my period during the detox?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes. Minor adjustments will be guided.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-rose-900 mb-6">
            Your womb is your power center. Give it the care it deserves.
          </h2>
          
          <Button 
            className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6"
            size="lg"
          >
            <a href="#" className="no-underline">
              Reserve Your Spot for ₹999
            </a>
          </Button>
          
          <p className="text-gray-700 font-medium">
            Next batch starts soon. Limited seats available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;