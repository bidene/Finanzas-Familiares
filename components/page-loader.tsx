"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-blue-700 to-blue-900">
      <div className="text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto animate-bounce">
          <Image
            src="/images/logo.jpg"
            alt="FMI Logo"
            width={128}
            height={128}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Bourse Familiale FMI</h2>

          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "150ms" }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
          </div>

          <p className="text-white/80 text-sm">Chargement en cours...</p>
        </div>
      </div>
    </div>
  )
}
