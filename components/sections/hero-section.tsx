"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Zap, ArrowRight, Play, Shield, Clock, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge className="mb-6 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 hover:from-red-200 hover:to-orange-200 animate-bounce">
          <AlertTriangle className="w-3 h-3 mr-1" />
          73% of Law Students Feel Overwhelmed Daily
        </Badge>

        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Stop <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Drowning</span>{" "}
          in Law School.
          <br />
          Start{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Dominating
          </span>{" "}
          It.
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
          While your classmates struggle with scattered notes, missed networking opportunities, and crushing anxiety...
          <br />
          <span className="text-blue-600 font-bold">
            You'll have the unfair advantage that gets you to the top 10%.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="mr-2 w-5 h-5" />
            Get Instant Access - FREE
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-gray-50">
            <Play className="mr-2 w-4 h-4" />
            Watch 2-Min Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-8">
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
            <Shield className="w-4 h-4 text-green-500 mr-2" />
            100% Free for Students
          </div>
          <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-blue-500 mr-2" />
            Setup in Under 60 Seconds
          </div>
          <div className="flex items-center bg-purple-50 px-3 py-1 rounded-full">
            <Award className="w-4 h-4 text-purple-500 mr-2" />
            Used by Top 1% Students
          </div>
        </div>
      </div>
    </section>
  )
}
