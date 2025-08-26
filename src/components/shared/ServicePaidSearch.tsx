// components/ServiceSection.tsx
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react'

interface ServiceSectionProps {
  title: string
  description: string
  image: StaticImageData | string
  link: string
  linkText?: string
  reverse?: boolean
  subtitle?: string
  id?: string
  icon?: React.ReactNode
}

export default function ServicePaidSearch({
  title,
  description,
  image,
  link,
  linkText = 'Learn more',
  reverse = false,
  subtitle,
  icon,
  id,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className="bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.10)] rounded-lg flex justify-center items-center py-8 scroll-mt-24"
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row ${
          reverse ? 'md:flex-row-reverse' : ''
        } justify-center items-center gap-10 md:gap-20`}
      >
        {/* Image */}
        <div className="relative w-full max-w-md md:max-w-sm lg:max-w-lg aspect-square mx-auto rounded-2xl overflow-hidden bg-white">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#063668] mb-4 sm:mb-6">
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 mb-4 text-[#4299E1] text-xs sm:text-sm font-medium">
              {icon && <span className="text-[#2793D7]">{icon}</span>}
              <span>{subtitle}</span>
            </div>
            {title}
          </h2>
          <p className="text-[#2F2F2F] mb-10 text-sm leading-snug">
            {description.includes('<br') ? (
              <span dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              description
            )}
          </p>
          <a
            href={link}
            className="flex w-full sm:w-[192px] justify-center items-center gap-1 px-[29px] py-[13px] rounded-lg bg-[#2793D7] text-white font-medium shadow-md mx-auto md:mx-0"
          >
            {linkText} <ArrowRight className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
