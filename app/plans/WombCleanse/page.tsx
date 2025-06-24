"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Sparkles } from "lucide-react"

export default function WombCleansePlan() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
      <Card className="w-full max-w-[500px] h-[500px] max-h-[500px] mx-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 bg-white flex flex-col
        sm:max-w-full sm:h-auto sm:rounded-xl sm:mx-2">
        <CardHeader className="text-center pb-2">
          <Sparkles className="h-10 w-10 text-bright-pink mx-auto mb-2" />
          <CardTitle className="text-2xl font-bold text-gray-800">Womb Cleanse</CardTitle>
          <CardDescription className="text-bright-pink font-semibold text-lg mt-2">
            ₹4,999 <span className="text-gray-500 text-base font-normal">/ 10 Days</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col px-6 sm:px-2">
          <ul className="text-gray-700 text-base space-y-4 mb-8 mt-6">
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Personalized Siddha herbs</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Diet & lifestyle plan</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />1:1 consult with Dr. Uyirinayan</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Voice note guidance</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Support for PCOD, fibroids, painful cycles</li>
          </ul>
          <div className="mt-auto">
            <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full py-4 font-semibold transition-all duration-300 hover:scale-105 text-lg">
              Join Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
