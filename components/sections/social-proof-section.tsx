"use client"

import { Star } from "lucide-react"
import { AnimatedCounter } from "../animated-counter"

export function SocialProofSection() {
  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm border-y">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">
              <AnimatedCounter end={12847} suffix="+" />
            </div>
            <p className="text-gray-600">Law Students Using Embra</p>
            <div className="flex items-center justify-center text-xs text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
              +127 joined today
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={94} suffix="%" />
            </div>
            <p className="text-gray-600">Pass Bar Exam First Try</p>
            <div className="text-xs text-gray-500">vs 78% national average</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">
              <AnimatedCounter end={156} suffix=" hrs" />
            </div>
            <p className="text-gray-600">Average Time Saved</p>
            <div className="text-xs text-gray-500">per semester</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">
              <AnimatedCounter end={4.9} suffix="/5" />
            </div>
            <p className="text-gray-600">Student Rating</p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
