"use client"

import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"
import { UrgencyTimer } from "../urgency-timer"

export function Header() {
  return (
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Embra</span>
        </div>
        <div className="hidden md:block">
          <UrgencyTimer />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  )
}
