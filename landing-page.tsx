"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Users,
  TrendingUp,
  MessageSquare,
  Scale,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  AlertTriangle,
  Clock,
  Target,
  Shield,
  Award,
  Brain,
  Lightbulb,
  X,
  Play,
  Quote,
  TrendingDown,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "./components/animated-counter"
import { FloatingElements } from "./components/floating-elements"
import { UrgencyTimer } from "./components/urgency-timer"

export default function EmbraHighConverting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Header with Urgency */}
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

      {/* HERO SECTION - Curiosity & Pain Agitation */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 hover:from-red-200 hover:to-orange-200 animate-bounce">
            <AlertTriangle className="w-3 h-3 mr-1" />
            73% of Law Students Feel Overwhelmed Daily
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Start with Embra.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Stay with Embra.
            </span>
            <br />
            <span className="text-gray-700 text-3xl md:text-5xl">
              Stop <span className="text-red-600">Drowning</span> in Law School.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            From 1L orientation to bar exam success, Embra is your complete law school companion.
            <br />
            <span className="text-blue-600 font-bold">
              While your classmates struggle with scattered tools, you'll have the integrated system that gets you to
              the top 10%.
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

      {/* SOCIAL PROOF - Real-time Activity */}
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

      {/* PROBLEM AMPLIFICATION */}
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
                    You're burning out, losing sleep, and your grades are suffering. But you don't know how to manage
                    the pressure.
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

      {/* SOLUTION MECHANISM */}
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
                  Build your network with practicing lawyers and top-performing classmates through our exclusive
                  portals.
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

      {/* FEATURES & BENEFITS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Complete Law School Success System
            </h2>
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
                  <strong>Know exactly where you stand.</strong> Real-time tracking of your academic progress and bar
                  exam readiness with predictive analytics.
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
                  <strong>Skip the learning curve.</strong> Get insider tips, proven strategies, and step-by-step
                  guidance from successful law students and attorneys.
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

      {/* DETAILED SOCIAL PROOF */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Students. Real Results. Real Fast.
            </h2>
            <p className="text-xl text-gray-700">See how Embra transformed their law school experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "I went from bottom 25% to top 10% in one semester. The outline builder and study groups completely
                  changed my game. Now I'm getting interviews at BigLaw firms."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Chen</p>
                    <p className="text-sm text-gray-600">2L, Harvard Law School</p>
                    <p className="text-xs text-green-600 font-medium">↗ Grades improved 2.1 → 3.7 GPA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-purple-200 mb-4" />
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "The lawyer portal is insane. I connected with 5 attorneys in my first week and landed a summer
                  associate position at a top firm. This platform pays for itself."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Marcus Johnson</p>
                    <p className="text-sm text-gray-600">3L, Stanford Law School</p>
                    <p className="text-xs text-green-600 font-medium">💰 $180K summer associate offer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-pink-200 mb-4" />
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "I was having panic attacks before exams. The wellness tracker and break center literally saved my
                  mental health. Now I'm thriving, not just surviving."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Aisha Patel</p>
                    <p className="text-sm text-gray-600">1L, NYU School of Law</p>
                    <p className="text-xs text-green-600 font-medium">🧠 Stress levels reduced 70%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Media Mentions */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Featured In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">Law School Insider</div>
                <p className="text-sm text-gray-500">"Revolutionary Platform"</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">Above the Law</div>
                <p className="text-sm text-gray-500">"Game-Changing Tool"</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">ABA Journal</div>
                <p className="text-sm text-gray-500">"Future of Legal Ed"</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">PreLaw Magazine</div>
                <p className="text-sm text-gray-500">"Must-Have Platform"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STACK & OFFER */}
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
                      If you don't see improvement in your grades and stress levels within 30 days, we'll personally
                      help you succeed or refund every penny.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY & SCARCITY */}
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

      {/* OBJECTION HANDLING FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">Everything you need to know about Embra</p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl">Is Embra really free for students?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, 100% free for verified law students. We believe financial barriers shouldn't prevent academic
                    success. Simply verify your student status with your .edu email and you get full access to
                    everything.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl">How is this different from other study apps?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Other apps are generic tools. Embra is built specifically for law school's unique challenges. We
                    combine academic tools, career networking, and mental wellness in one platform designed by law
                    students, for law students.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl">Can I really connect with practicing lawyers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Absolutely. Our lawyer portal has 2,400+ verified attorneys who volunteer their time to mentor
                    students. They're sorted by practice area, location, and law school, making it easy to find relevant
                    mentors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl">What if I'm already struggling in law school?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Perfect! Embra is designed for students at every level. Our 1L Survival System and progress tracking
                    help struggling students get back on track. 73% of users see grade improvements within their first
                    semester.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-xl">Is my data secure and private?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Your privacy is our priority. We use bank-level encryption, never sell your data, and you control
                    what information you share. Your academic records and personal information remain completely
                    confidential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
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
              <strong className="text-white">
                Join 12,847+ law students who chose to dominate instead of struggle.
              </strong>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Embra</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering law students to succeed through better tools, community, and guidance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Verification
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Agreement
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Embra. All rights reserved. Made with ❤️ for law students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
