"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles } from "lucide-react"
import Link from 'next/link'

function Topnav() {
  return (
    <div className="bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-pink/20 z-40">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          
          {/* Bouncing Text Link */}
          <Link href="/uterus-detox" className="flex items-center space-x-2 group">
            <span className="text-sm font-medium text-gray-700 group-hover:text-bright-pink transition-colors animate-bounce">
              👉 Introducing the 10-Day Uterus Detox Program
            </span>
          </Link>

          {/* Gradient Button */}
          <button className="relative inline-flex h-12 w-48 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white">
            {/* Spinning Background Gradient */}
            <span className="absolute -inset-4 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fddde6_0%,#f9a8d4_50%,#fddde6_100%)] rounded-[20px]" />

            {/* Button Content */}
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-[10px] bg-white border border-pink/60 px-6 py-2 text-sm font-medium text-black backdrop-blur-3xl z-10">
              Visit Our Store
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topnav
