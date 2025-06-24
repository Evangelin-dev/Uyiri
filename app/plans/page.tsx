"use client"

import { Button } from "@/components/ui/button"
import ShuddhiDetoxPlan from "./ShuddhiDetox/page"
import UterusResetPlan from "./UterusResetPlan/page"
import WombCleansePlan from "./WombCleanse/page"

export default function PlansPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Choose Your <span className="text-bright-pink">Healing Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Select from our signature Siddha healing programs, each designed for holistic transformation and guided by Dr. Uyirinayan.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <WombCleansePlan />
          <ShuddhiDetoxPlan />
          <UterusResetPlan />
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Need help choosing a plan?</p>
          <Button variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}
    