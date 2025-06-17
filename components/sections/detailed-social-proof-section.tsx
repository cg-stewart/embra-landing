"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function DetailedSocialProofSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Students. Real Results. Real Fast.
          </h2>
          <p className="text-xl text-gray-700">
            See how Embra transformed their law school experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "I went from bottom 25% to top 10% in one semester. The outline
                builder and study groups completely changed my game. Now I'm
                getting interviews at BigLaw firms."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">
                    2L, Harvard Law School
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    ↗ Grades improved 2.1 → 3.7 GPA
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-purple-200 mb-4" />
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "The lawyer portal is insane. I connected with 5 attorneys in my
                first week and landed a summer associate position at a top firm.
                This platform pays for itself."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900">Marcus Johnson</p>
                  <p className="text-sm text-gray-600">
                    3L, Stanford Law School
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    💰 $180K summer associate offer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-pink-200 mb-4" />
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "I was having panic attacks before exams. The wellness tracker
                and break center literally saved my mental health. Now I'm
                thriving, not just surviving."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900">Aisha Patel</p>
                  <p className="text-sm text-gray-600">1L, NYU School of Law</p>
                  <p className="text-xs text-green-600 font-medium">
                    🧠 Stress levels reduced 70%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Media Mentions */}
      </div>
    </section>
  );
}
