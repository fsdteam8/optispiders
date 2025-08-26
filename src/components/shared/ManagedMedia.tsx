import { Globe } from 'lucide-react'
import React from 'react'

interface ManagedMediaProps {
  subtitle?: string
  title: string
  description: string
  icon?: React.ReactNode
  id?: string
}

export default function ManagedMedia({
  subtitle = 'Expert Services',
  title,
  description,
  id,
}: ManagedMediaProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 lg:py-24  rounded-lg flex justify-center bg-[#FAFAFA] scroll-mt-24 "
    >
      <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.10)] w-full bg-[#FFF]">
        <div className="text-center px-4 sm:px-6 lg:px-6 container mx-auto">
          {/* Small Top Text */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-2 text-[#4299E1] text-xs sm:text-sm font-medium">
            <Globe size={16} />
            <span>{subtitle}</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#063668] mb-3 lg:mb-4">
            {title}
          </h2>

          {/* Description */}
          <p
            className="mx-auto mb-6 text-sm sm:text-base font-normal"
            style={{ color: 'var(--Foundation-Grey-grey-900, #2F2F2F)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
