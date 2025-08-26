'use client'

import { Card } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ShowcaseItem {
  title: string
  description: string
}

interface ShowcaseSectionProps {
  items: ShowcaseItem[]
  imageSrc: string
  reverse?: boolean
  id?: string
}

export default function RetailShowcase({
  items,
  imageSrc,
  reverse = false,
  id,
}: ShowcaseSectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0) // Start with first item open
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (currentIndex === null) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => {
            if (current === null) return 0
            return (current + 1) % items.length // Move to next item
          })
          return 0 // Reset progress
        }
        return prev + 100 / 80 // Progress over ~8 seconds
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentIndex, items.length])

  const handleTitleClick = (index: number) => {
    setCurrentIndex(currentIndex === index ? null : index)
    setProgress(0) // Reset progress on manual click
  }

  return (
    <div className="container mx-auto my-6 lg:my-14 scroll-mt-24" id={id}>
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
                <div key={index} className="transition-all duration-500">
                  <h3
                    className="text-lg font-semibold text-primary mb-3 leading-tight cursor-pointer hover:text-primary-dark"
                    onClick={() => handleTitleClick(index)}
                  >
                    {item.title}
                  </h3>

                  {/* Animate Description */}
                  <AnimatePresence initial={false}>
                    {currentIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      >
                        <p>{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress Bar */}
                  {currentIndex === index && (
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
