'use client'

import HeroBannerTwo from '@/components/shared/Banner'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const ProductsBanner = () => {
  const router = useRouter()

  return (
    <div>
      <HeroBannerTwo
        isStatsShow={false}
        badgeText="Optimize, Sell, Grow, Repeat."
        badgeIcon={
          <Image
            src="/icons/Vector.png"
            alt="stars"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        }
        heading="Uncover Every Product, Ignite Every Campaign."
        description="Explore your complete catalog—AI-tuned by OptiSpiders for peak performance on every digital shelf. Spot trends, track top converters, and find the perfect picks for your next campaign."
        //Navigate to /home and /services
        onPrimaryBtnClick={() => router.push('/')}
        onSecondaryBtnClick={() => router.push('/services')}
      />
    </div>
  )
}
