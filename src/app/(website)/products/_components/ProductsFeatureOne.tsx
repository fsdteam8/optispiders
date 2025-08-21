import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface FeatureCardProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  image: string | StaticImageData
  isLeft?: boolean
}

export const ProductsFeatureOne: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText = 'Learn more ->',
  buttonLink,
  image,
  isLeft = true,
}) => {
  return (
    <div className="bg-white shadow-lg py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div
          className={`flex-1 ${
            isLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'
          } flex justify-center`}
        >
          <Image
            src={image}
            alt={title}
            className="rounded-xl shadow-md"
            width={450}
            height={350}
          />
        </div>

        {/* Content Section */}
        <div
          className={`flex-1 text-center space-y-4 md:text-left ${
            isLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'
          }`}
        >
          <h2 className="text-2xl font-bold text-[#063668]">{title}</h2>
          <p className="text-[#2F2F2F] text-sm leading-[120%] mt-4">
            {description}
          </p>

          {buttonText && buttonLink && (
            <Link href={buttonLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-6 bg-[#2793D7] px-6 py-3 rounded-lg shadow-md">
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
