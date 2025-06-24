"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Leaf } from "lucide-react"

export default function ShuddhiDetoxPlan() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
      <Card className="w-full max-w-[500px] h-[500px] max-h-[500px] mx-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 bg-white flex flex-col
        sm:max-w-full sm:h-auto sm:rounded-xl sm:mx-2">
        <CardHeader className="text-center pb-2">
          <Leaf className="h-10 w-10 text-sage-green mx-auto mb-2" />
          <CardTitle className="text-2xl font-bold text-gray-800">Shuddhi Detox</CardTitle>
          <CardDescription className="text-bright-pink font-semibold text-lg mt-2">
            ₹3,999 <span className="text-gray-500 text-base font-normal">/ 7 Days</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col px-4 sm:px-2">
          <ul className="text-gray-700 text-base space-y-3 mb-6 mt-4">
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Herbal teas & breathwork</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Daily emotional reset</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Hormonal balance support</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Guided meditation</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-sage-green" />Ideal for stress, skin, bloating</li>
          </ul>
          <div className="mt-auto">
            <Button className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105 text-lg">
              Start Detox
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
