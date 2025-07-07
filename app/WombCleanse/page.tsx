"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Leaf, Users, Phone } from "lucide-react";

const WombCleansePage = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-rose-900 mb-6 leading-tight hover:scale-105 transition-transform duration-300">
            Womb Cleanse – 10-Day Natural Detox
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium animate-fade-in delay-150">
            A Gentle Healing Journey to Cleanse, Restore, and Reconnect with Your Feminine Energy
          </p>

          <Card className="bg-white/80 shadow-lg border-rose-100 mb-12 hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl md:text-3xl text-rose-800 mb-6">
                Is This For You?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "Struggling with painful or heavy periods?",
                  "Feeling emotionally stuck or energetically drained?",
                  "Experiencing hormonal imbalances, fatigue, or mood shifts?",
                  "Wanting to prepare your body for conception or recover post-pregnancy?",
                ].map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 mb-12 animate-fade-in delay-300">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              A 10-day guided detox rooted in traditional healing to release what no longer serves—physically and emotionally—and reconnect with your womb.
            </p>
          </div>
        </div>
      </section>

      {/* What’s Included */}
      <section className="px-4 py-16 bg-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-rose-900 mb-12 animate-fade-in">
            What’s Included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Womb Detox Meal Plan", desc: "Fruit- & liquid-based nutrition to nourish your reproductive system" },
              { icon: Heart, title: "Breathwork & Movement", desc: "Simple daily routines for energy & emotional release" },
              { icon: Users, title: "WhatsApp Support", desc: "Daily voice notes, check-ins & community encouragement" },
              { icon: Phone, title: "1-on-1 Closing Call", desc: "Personal guidance to support long-term womb wellness" },
            ].map((item, i) => (
              <Card key={i} className={`bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-${100 * (i + 1)}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-rose-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all" size="lg">
                <a href="#">Join the Womb Cleanse Now</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 bg-rose-50/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-rose-900 mb-12 animate-fade-in">
            What Women Are Experiencing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Kavitha", location: "Coimbatore", text: "I feel like I released years of stuck emotions." },
              { name: "Revathi", location: "Chennai", text: "I didn’t know a detox could feel this gentle and empowering." },
              { name: "Shalini", location: "Bangalore", text: "This was a spiritual and physical reset I didn’t know I needed." },
            ].map((t, i) => (
              <Card key={i} className={`bg-white shadow-lg border-rose-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-${100 * (i + 1)}`}>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-rose-800 font-semibold">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-rose-800">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-rose-900 mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>

          <Card className="bg-white shadow-lg border-rose-100 animate-scale-in">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {[
                  ["Is this a fasting program?", "No. It includes nourishing fruits, herbal drinks, and warm liquids."],
                  ["Can I do this during my period?", "Yes. Adjustments will be guided to support your cycle."],
                  ["Will this help with PCOD/fibroids?", "Many women have reported symptom relief and emotional clarity."],
                  ["Is this program online?", "Yes. Entirely guided via WhatsApp."],
                ].map(([q, a], i) => (
                  <AccordionItem value={`item-${i + 1}`} key={i}>
                    <AccordionTrigger className="text-left font-semibold text-rose-800">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">{a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-rose-900 mb-6">
            Your womb is sacred. Let this journey be your return home.
          </h2>
          <Button className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6" size="lg">
            <a href="#">Join Now – ₹999 Only</a>
          </Button>
          <p className="text-gray-700 font-medium">
            Limited seats. Next batch starting soon.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WombCleansePage;
