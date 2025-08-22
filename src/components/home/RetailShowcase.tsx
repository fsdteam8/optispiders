'use client'

import { Card } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ShowcaseItem {
  title: string
  description: string
}

interface ShowcaseSectionProps {
  items: ShowcaseItem[]
  imageSrc: string
  reverse?: boolean
}

export default function RetailShowcase({
  items,
  imageSrc,
  reverse = false,
}: ShowcaseSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % items.length)
          return 0
        }
        return prev + 100 / 80
      })
    }, 100)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className="container mx-auto my-6  lg:my-14">
      <Card className="overflow-hidden p-6">
        <div
          className={`flex flex-col gap-6 ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Image Section */}
          <div className="lg:w-1/2 lg:pr-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt="Showcase image"
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 lg:pl-6 mt-10 lg:mt-0">
            <div className="space-y-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-primary mb-3 leading-tight">
                    {item.title}
                  </h3>

                  {/* Animate Description */}
                  <AnimatePresence initial={false}>
                    {index === currentIndex && (
                      <motion.div
                        key="description"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress Bar */}
                  {index === currentIndex && (
                    <div className="w-full h-1 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
