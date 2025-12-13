"use client"

import { useEffect, useRef, useState } from "react"

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem value="15000" suffix="+" label="Familles aidées" isVisible={isVisible} delay={0} />
          <StatItem value="850" suffix="M€" label="Montant distribué" isVisible={isVisible} delay={100} />
          <StatItem value="92" suffix="%" label="Taux d'acceptation" isVisible={isVisible} delay={200} />
          <StatItem value="48" suffix="h" label="Délai moyen" isVisible={isVisible} delay={300} />
        </div>
      </div>
    </section>
  )
}

function StatItem({
  value,
  suffix,
  label,
  isVisible,
  delay,
}: { value: string; suffix: string; label: string; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0)
  const targetValue = Number.parseInt(value)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = targetValue / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        setCount(targetValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, targetValue])

  return (
    <div className="text-center animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-3xl lg:text-5xl font-bold mb-2">
        {isVisible ? count : 0}
        {suffix}
      </div>
      <div className="text-sm lg:text-base text-primary-foreground/80">{label}</div>
    </div>
  )
}
