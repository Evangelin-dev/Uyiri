"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Users, Phone, Heart, Sparkles } from "lucide-react";

const Shuddhi = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight hover:scale-105 transition-transform duration-300">
            Shuddhi – Ayurvedic Detox for Women's Wellness
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium animate-fade-in delay-150">
            A 10-Day Holistic Cleanse for Hormonal Balance, Clarity & Radiance
          </p>
          
          <Card className="bg-white/80 shadow-lg border-emerald-100 mb-12 hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl md:text-3xl text-emerald-800 mb-6">
                Is this you?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Constant fatigue even after rest?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Feeling heavy, sluggish, or emotionally drained?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Battling bloating, brain fog, or dull skin?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <p className="text-gray-700">Looking to reset your hormones and reconnect with your inner rhythm?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12 animate-fade-in delay-300">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              If yes, it's time to experience <span className="font-semibold text-emerald-800">Shuddhi</span>—a deeply nourishing Ayurvedic cleanse tailored for modern women who want to feel light, clear, and aligned.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="px-4 py-16 bg-emerald-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-12 animate-fade-in">
            What You'll Receive
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-800 mb-3">
                  10-Day Ayurvedic Detox Plan
                </h3>
                <p className="text-gray-600 text-sm">
                  Curated fruit-based and light meals that balance doshas, support liver cleansing, and improve digestion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-800 mb-3">
                  Daily Breathwork + Gentle Movement
                </h3>
                <p className="text-gray-600 text-sm">
                  Simple practices that move stagnant energy and restore your pranic flow.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-800 mb-3">
                  WhatsApp-Based Guidance
                </h3>
                <p className="text-gray-600 text-sm">
                  Get voice notes, reminders, daily tips, and personal check-ins through our private support group.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-400">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-800 mb-3">
                  Mind-Body Healing Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Reflection prompts, journaling tips, and daily affirmations to support emotional detox alongside the physical.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-800 mb-3">
                  One-on-One Wellness Review Call
                </h3>
                <p className="text-gray-600 text-sm">
                  A closing consult to review your results and plan your post-detox lifestyle with clarity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-emerald-100 to-green-100 shadow-xl border-emerald-200 hover:scale-105 transition-transform duration-300 animate-scale-in">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
                Investment: ₹999 Only
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                This is your invitation to pause, cleanse, and restart.
              </p>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <a href="#" className="no-underline">
                  Join Shuddhi Now – Limited Seats
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 bg-emerald-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-12 animate-fade-in">
            What Women Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "I finally slept deeply and woke up with energy."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-800 font-semibold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Ritu</p>
                    <p className="text-sm text-gray-600">Bengaluru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "I didn't realize how much I was holding onto. This detox was light and emotional at the same time."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-800 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Sneha</p>
                    <p className="text-sm text-gray-600">Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-300">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "My skin started glowing on day 6. No filters needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-800 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Aafreen</p>
                    <p className="text-sm text-gray-600">Chennai</p>
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
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-12 animate-fade-in">
            FAQs
          </h2>
          
          <Card className="bg-white shadow-lg border-emerald-100 animate-scale-in">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold text-emerald-800">
                    Is this only liquid fasting?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    No. Shuddhi includes fruits, warm herbal drinks, and light meals. It's gentle but effective.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold text-emerald-800">
                    Can I do this while working full-time?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes. It's designed for real women with real schedules.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold text-emerald-800">
                    Will this help with PCOD, fatigue, or bloating?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, many women have reported relief from PCOD symptoms, reduced bloating, and better digestion.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold text-emerald-800">
                    Is this entirely online?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, all guidance is given through WhatsApp voice notes, group check-ins, and your final 1:1 consult.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-emerald-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
            Your body wants balance. Let Shuddhi guide you back to it.
          </h2>
          
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6"
            size="lg"
          >
            <a href="#" className="no-underline">
              Join the 10-Day Ayurvedic Detox – ₹999
            </a>
          </Button>
          
          <p className="text-gray-700 font-medium">
            Next batch begins soon. Book your spot today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shuddhi;