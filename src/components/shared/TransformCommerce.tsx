'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: 'Increase Sales',
    description:
      'Our clients see an average 35% increase in digital commerce revenue',
    icon: TrendingUp,
  },
  {
    title: 'Optimize Spend',
    description:
      'A content score of 95% or higher is our standard—and we’re committed to keeping it that way.',
    icon: Zap,
  },
  {
    title: 'Protect Your Brand',
    description: 'Eliminate unauthorized sellers and MAP violations',
    icon: Shield,
  },
]

export default function TransformCommerce() {
  return (
    <section className="bg-[#063668] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Digital Commerce?
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Join hundreds of leading brands who’ve optimized their online presence
          and maximized their ROI with our solutions.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d4a75] rounded-xl px-8 py-6 text-center shadow-lg"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link href={'/services/managed-media'}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded">
              <span className="text-base">Get Started</span>
              <ArrowRight />
            </Button>
          </Link>

          <Link href={'/products/brands-and-shoppers-connect-instantly'}>
            <Button
              variant="outline"
              className=" bg-transparent text-white hover:text-[#0a3d62]"
            >
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
