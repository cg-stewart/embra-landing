"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Brain, BarChart3, MessageSquare, Lightbulb } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Complete Law School Success System</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to go from overwhelmed to top of your class, all in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Smart Outline Builder</CardTitle>
              <CardDescription>
                <strong>Never lose track of key concepts again.</strong> Our AI-powered system helps you create
                comprehensive, searchable outlines that actually make sense.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  💡 Students save 15+ hours per exam using our outline system
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Exclusive Lawyer Portal</CardTitle>
              <CardDescription>
                <strong>Network like the top 1%.</strong> Direct access to practicing attorneys for mentorship, career
                advice, and job opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-700 font-medium">
                  🚀 Our users get 3x more job interviews than average
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Wellness Command Center</CardTitle>
              <CardDescription>
                <strong>Prevent burnout before it happens.</strong> Track mood, manage stress, and maintain peak
                performance with our integrated wellness tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700 font-medium">
                  ✨ 89% report better stress management within 2 weeks
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Progress Intelligence</CardTitle>
              <CardDescription>
                <strong>Know exactly where you stand.</strong> Real-time tracking of your academic progress and bar exam
                readiness with predictive analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-sm text-orange-700 font-medium">📊 Predict bar exam success with 94% accuracy</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle className="text-xl">Elite Study Groups</CardTitle>
              <CardDescription>
                <strong>Study with the best, become the best.</strong> Join curated study groups with top-performing
                students in your class and school.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-sm text-pink-700 font-medium">🎯 Group members score 12% higher on average</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-xl">1L Survival System</CardTitle>
              <CardDescription>
                <strong>Skip the learning curve.</strong> Get insider tips, proven strategies, and step-by-step guidance
                from successful law students and attorneys.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <p className="text-sm text-indigo-700 font-medium">
                  🏆 95% of 1Ls improve grades within first semester
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
