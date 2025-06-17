"use client"

import { Button } from "@/components/ui/button"
import { Zap, ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Start with Embra. Stay with Embra.
            </span>
            <br />
            Your Law School Success Starts Right Now
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Every day you wait is another day your classmates get ahead.
            <br />
            <strong className="text-white">Join 12,847+ law students who chose to dominate instead of struggle.</strong>
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">What happens next:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white">Sign Up (30 seconds)</h4>
                  <p className="text-gray-300 text-sm">Verify with your .edu email</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white">Quick Setup (2 minutes)</h4>
                  <p className="text-gray-300 text-sm">Add your courses and goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white">Start Dominating</h4>
                  <p className="text-gray-300 text-sm">See results within days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="mr-3 w-6 h-6" />
              Get Instant Access - FREE
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                ✅ Free forever for students
                <br />✅ No credit card required
                <br />✅ Setup in under 60 seconds
              </p>
            </div>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Questions? Email us at hello@embra.com or text us at (555) 123-EMBRA</p>
            <p className="mt-2">We typically respond within 5 minutes during business hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
