"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Target, Users, TrendingUp, CheckCircle, X } from "lucide-react"

export function SolutionMechanismSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Start with Embra. Stay with Embra.</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your complete law school journey companion - from day one through bar exam success and beyond.
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Embra System
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            While other tools treat symptoms, Embra fixes the root cause: lack of structure, community, and guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">STEP 1: Organize</CardTitle>
              <CardDescription className="text-lg">
                Transform chaos into clarity with our intelligent outline builder and note organization system.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">STEP 2: Connect</CardTitle>
              <CardDescription className="text-lg">
                Build your network with practicing lawyers and top-performing classmates through our exclusive portals.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">STEP 3: Dominate</CardTitle>
              <CardDescription className="text-lg">
                Track progress, maintain wellness, and consistently outperform with data-driven insights.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Other Solutions Fail (And Embra Succeeds)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-red-600 flex items-center">
                <X className="w-5 h-5 mr-2" />
                Traditional Study Apps
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Generic tools not built for law school</li>
                <li>• No community or networking features</li>
                <li>• Ignore mental health and wellness</li>
                <li>• Scattered across multiple platforms</li>
                <li>• No career guidance or mentorship</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-600 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                The Embra Advantage
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Built specifically for law students</li>
                <li>• Integrated community and lawyer network</li>
                <li>• Comprehensive wellness tracking</li>
                <li>• All-in-one centralized platform</li>
                <li>• Direct access to practicing attorneys</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
