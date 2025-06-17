"use client"

import { CheckCircle, Shield } from "lucide-react"

export function ValueStackSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Get With Embra</h2>
            <p className="text-xl text-blue-100">Normally worth $2,400+ per year. Yours free as a student.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Platform ($1,200 value)</h3>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Smart Outline Builder</span>
                  <span className="text-sm text-gray-500">($300 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Progress Intelligence Dashboard</span>
                  <span className="text-sm text-gray-500">($200 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Wellness Command Center</span>
                  <span className="text-sm text-gray-500">($150 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>1L Survival System</span>
                  <span className="text-sm text-gray-500">($250 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Elite Study Groups</span>
                  <span className="text-sm text-gray-500">($300 value)</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exclusive Access ($1,200+ value)</h3>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Lawyer Portal Network</span>
                  <span className="text-sm text-gray-500">($500 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Monthly Mentor Sessions</span>
                  <span className="text-sm text-gray-500">($400 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Career Placement Support</span>
                  <span className="text-sm text-gray-500">($300 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Priority Support</span>
                  <span className="text-sm text-gray-500">($100 value)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Total Value: <span className="line-through text-gray-500">$2,400+</span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">Your Price: FREE</div>
                <p className="text-gray-600 mb-6">
                  100% free for verified law students. No credit card required. No hidden fees. Ever.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center text-green-700">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-semibold">30-Day Success Guarantee</span>
                  </div>
                  <p className="text-sm text-green-600 mt-2">
                    If you don't see improvement in your grades and stress levels within 30 days, we'll personally help
                    you succeed or refund every penny.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
