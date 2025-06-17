"use client"

import { useEffect, useState } from "react"
import { BookOpen, Users, TrendingUp, Heart, Scale, Coffee } from "lucide-react"

const icons = [BookOpen, Users, TrendingUp, Heart, Scale, Coffee]

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <Icon className="w-8 h-8 text-blue-500" />
        </div>
      ))}
    </div>
  )
}
