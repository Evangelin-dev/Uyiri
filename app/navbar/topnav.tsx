"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles } from "lucide-react"

function Topnav() {
    return (<div className="bg-white">
        {/* Top Bar */}

        <div className="bg-white border-b border-pink/20 z-40">
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
    </div>
    )
}

export default Topnav