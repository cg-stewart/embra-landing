"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Zap, ArrowRight } from "lucide-react"

export function UrgencySection() {
  return (
    <section className="py-16 bg-red-50 border-y-4 border-red-200">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-red-800">Early Access Ends Soon</h2>
          </div>
          <p className="text-xl text-red-700 mb-8">
            We're limiting early access to the first 15,000 students to ensure quality support.
            <strong> Only 2,153 spots remaining.</strong>
          </p>

          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Early Access Progress</span>
              <span className="text-red-600 font-bold">85.7% Full</span>
            </div>
            <Progress value={85.7} className="h-3 mb-2" />
            <p className="text-sm text-gray-500">12,847 of 15,000 spots taken</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-red-600">⏰</div>
              <div className="text-sm text-gray-600">Limited Time</div>
              <div className="font-bold">Free Access</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-orange-600">🔥</div>
              <div className="text-sm text-gray-600">Exclusive Bonus</div>
              <div className="font-bold">1-on-1 Setup Call</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">🎯</div>
              <div className="text-sm text-gray-600">Early Users Only</div>
              <div className="font-bold">Lifetime Access</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-xl px-12 py-6 shadow-2xl animate-pulse"
          >
            <Zap className="mr-2 w-6 h-6" />
            Claim Your Spot Now - FREE
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
