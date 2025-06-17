"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FAQSection() {
  return (
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
                  success. Simply verify your student status with your .edu email and you get full access to everything.
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
                  Your privacy is our priority. We use bank-level encryption, never sell your data, and you control what
                  information you share. Your academic records and personal information remain completely confidential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
