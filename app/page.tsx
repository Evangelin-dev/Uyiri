"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Leaf, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function AyurvedicHomepage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pinkStyle = "bg-bright-pink hover:bg-bright-pink/90";
  const greenStyle1 = "bg-sage-green hover:bg-sage-green/90";
  const greenStyle2 = "bg-light-green hover:bg-light-green/90";
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
            <div className="flex items-center space-x-3">
              <Image
                src="/images/uyiri-logo.png"
                alt="Uyiri Healing Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold text-bright-pink">uyirihealing</span>
            </div>

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Animated Background Elements */}
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

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Empowering Women Through <span className="text-bright-pink">Siddha Healing</span>
              <br />
              <span className="text-sage-green text-3xl md:text-4xl lg:text-5xl">
                A 21-Year Legacy of Holistic Wellness
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cancer, Uterine & Genetic Disorders Treated with Bio-Siddha Medicine |
              <span className="text-sage-green font-semibold"> Global Reach, Local Roots</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                className={`${scrolled ? greenStyle1 : pinkStyle} text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group min-w-[200px]`}
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Book Appointment
              </Button>

              <Button
                size="lg"
                className={`${scrolled ? greenStyle1 : pinkStyle} text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group min-w-[200px]`}
              >
                <Leaf className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore Detox Programs
              </Button>

              <Button
                size="lg"
                className={`${scrolled ? greenStyle2 : pinkStyle} text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group min-w-[200px]`}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                WhatsApp Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-bright-pink rounded-full animate-pulse"></div>
                <span>21+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                <span>1000+ Women Healed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-light-green rounded-full animate-pulse"></div>
                <span>Global Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction to Dr. Uyirinayan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Meet Dr. Uyirinayan – <span className="text-bright-pink">The Heart of Uyiri Healing</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Dr. Uyirinayan brings over 21 years of clinical experience in Siddha healing, transforming women's
                health across 15+ countries. A teacher, researcher, and visionary, he's on a mission to revive the
                sacred science of Siddha through holistic care, herbal innovation, and education.
              </p>
            </div>

            {/* Animated Timeline Cards */}
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <div className="text-4xl mb-4">✔️</div>
                <h3 className="text-xl font-bold text-sage-green mb-2">21 Years Experience</h3>
                <p className="text-gray-600">Siddha clinical practice</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-200">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-sage-green mb-2">15+ Countries</h3>
                <p className="text-gray-600">Global patient reach</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-400">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-sage-green mb-2">Founder</h3>
                <p className="text-gray-600">Bio-Sithan Institute & Uyirati Herbal Market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Signature Programs */}
      <section id="signature-programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore Our <span className="text-bright-pink">Signature Healing Programs</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Womb Cleanse Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100 flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:animate-bounce">🌸</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Womb Cleanse – 10-Day Natural Detox</h3>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-gray-600">• Uterine cleansing, pain relief, regularizing periods</p>
                <p className="text-gray-600">• Diet plan, herbs, voice notes, 1:1 consult</p>
                <div className="flex justify-center mt-4">
                  <div className="bg-bright-pink/20 rounded-full px-4 py-2 text-center">
                    <span className="text-sm font-semibold text-bright-pink">
                      🎯 For PCOD, fibroids, painful cycles
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-auto">
                <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-bright-pink text-bright-pink hover:bg-bright-pink/10 rounded-full py-3 font-semibold"
                >
                  View Sample Plan
                </Button>
              </div>
            </div>

            {/* Shuddhi Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100 flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:animate-bounce">🌿</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Shuddhi – Ayurvedic Detox for Women's Wellness
                </h3>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-gray-600">• Hormonal balance, emotional reset</p>
                <p className="text-gray-600">• Herbal teas, breathwork, daily guidance</p>
                <div className="flex justify-center mt-4">
                  <div className="bg-bright-pink/20 rounded-full px-4 py-2 text-center">
                    <span className="text-sm font-semibold text-bright-pink">
                      🌿 For stress, skin, bloating, general wellness
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-auto">
                <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-bright-pink text-bright-pink hover:bg-bright-pink/10 rounded-full py-3 font-semibold"
                >
                  View Sample Plan
                </Button>
              </div>
            </div>

            {/* Uterus Reset Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100 flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:animate-bounce">🤱</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Uterus Reset – 10-Day Healing Journey</h3>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-gray-600">• Deep womb detox + energy balancing</p>
                <p className="text-gray-600">• Raw foods, meditations, personalized herbs</p>
                <div className="flex justify-center mt-4">
                  <div className="bg-bright-pink/20 rounded-full px-4 py-2 text-center">
                    <span className="text-sm font-semibold text-bright-pink">
                      🤱 Ideal for postpartum recovery, fertility prep
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-auto">
                <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-bright-pink text-bright-pink hover:bg-bright-pink/10 rounded-full py-3 font-semibold"
                >
                  View Sample Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 3: Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Real Stories. <span className="text-bright-pink">Real Healing.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-xs bg-sage-green/20 text-sage-green px-2 py-1 rounded-full">
                  Verified by team Uyiri Healing
                </span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "After 3 years of irregular periods, Dr. Uyirinayan's 10-day program completely transformed my cycle. I
                feel like myself again!"
              </p>
              <div className="text-sm text-gray-500">- Sarah M., Canada 🇨🇦</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-xs bg-sage-green/20 text-sage-green px-2 py-1 rounded-full">
                  Verified by team Uyiri Healing
                </span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The Shuddhi program helped me overcome years of hormonal imbalance. Dr. Uyirinayan's guidance was
                life-changing."
              </p>
              <div className="text-sm text-gray-500">- Priya K., India 🇮🇳</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-xs bg-sage-green/20 text-sage-green px-2 py-1 rounded-full">
                  Verified by team Uyiri Healing
                </span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "My PCOD symptoms disappeared after following the womb cleanse program. Grateful for this natural
                healing approach!"
              </p>
              <div className="text-sm text-gray-500">- Emma L., Australia 🇦🇺</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Work With Me - Consultations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Work With <span className="text-bright-pink">Dr. Uyirinayan</span>
            </h2>
            <p className="text-xl text-gray-600">Available Online & In-Person</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Video Consult */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col justify-center items-center min-h-[320px]">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Video Consult</h3>
              <p className="text-gray-600 mb-8 flex-grow flex items-center">
                Connect from anywhere in the world for personalized Siddha healing guidance
              </p>
              <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                Book Now
              </Button>
            </div>

            {/* Clinic Visit */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col justify-center items-center min-h-[320px]">
              <div className="text-5xl mb-6">🏥</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Clinic Visit</h3>
              <p className="text-gray-600 mb-8 flex-grow flex items-center">
                Visit our clinic in Tamil Nadu for comprehensive in-person treatment
              </p>
              <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                Book Now
              </Button>
            </div>

            {/* Join Detox Program */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col justify-center items-center min-h-[320px]">
              <div className="text-5xl mb-6">💆‍♀️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Detox Program</h3>
              <p className="text-gray-600 mb-8 flex-grow flex items-center">
                Start your healing journey with our signature detox programs
              </p>
              <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full transition-all duration-300 hover:scale-105 py-3 font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Book Appointment CTA Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Ready to Begin Your <span className="text-bright-pink">Healing Journey?</span>
            </h2>
            <Button
              size="lg"
              className="bg-gradient-to-r from-bright-pink to-sage-green hover:from-bright-pink/90 hover:to-sage-green/90 text-white px-12 py-6 text-xl rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-pulse"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: About Dr. Uyirinayan Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The Man Behind the Mission – <span className="text-sage-green">Dr. Uyirinayan</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-sage-green mb-2">21 Years</h3>
                <p className="text-sm text-gray-600">of practice</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-bold text-sage-green mb-2">15+ Countries</h3>
                <p className="text-sm text-gray-600">served</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="font-bold text-sage-green mb-2">Founder</h3>
                <p className="text-sm text-gray-600">Bio-Sithan Institute</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-bold text-sage-green mb-2">Advocate</h3>
                <p className="text-sm text-gray-600">for Siddha revival</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white rounded-full px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              Read Full Bio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
