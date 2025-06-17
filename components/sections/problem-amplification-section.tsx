"use client"

import { AlertTriangle, X, TrendingDown } from "lucide-react"

export function ProblemAmplificationSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-red-600">Brutal Truth</span> About Law School
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every day you don't have a system, you fall further behind. Here's what's really happening...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Your Notes Are a Disaster</h3>
                <p className="text-gray-600">
                  Scattered across 5 different apps, handwritten notebooks, and random Google Docs. When exam time
                  comes, you can't find anything.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">You're Networking Wrong</h3>
                <p className="text-gray-600">
                  While others build relationships with practicing lawyers, you're stuck wondering how to even start
                  those conversations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Stress Is Killing Your Performance</h3>
                <p className="text-gray-600">
                  You're burning out, losing sleep, and your grades are suffering. But you don't know how to manage the
                  pressure.
                </p>
              </div>
            </div>

            <div className="bg-red-100 border border-red-200 rounded-lg p-6 mt-8">
              <div className="flex items-center mb-3">
                <TrendingDown className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="font-bold text-red-800">The Cost of Doing Nothing:</h3>
              </div>
              <ul className="space-y-2 text-red-700">
                <li>• Lower grades = Fewer job opportunities</li>
                <li>• Poor networking = Starting salary $30K+ lower</li>
                <li>• Disorganization = 40% higher bar exam failure rate</li>
                <li>• Burnout = 23% of students drop out</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Be This Student</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-red-600">
                    <X className="w-4 h-4 mr-2" />
                    <span>Cramming the night before exams</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <X className="w-4 h-4 mr-2" />
                    <span>No lawyer connections</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <X className="w-4 h-4 mr-2" />
                    <span>Constant anxiety and stress</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <X className="w-4 h-4 mr-2" />
                    <span>Bottom 50% of class</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
