'use client'

import HeroBannerTwo from '@/components/shared/Banner'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const AboutComponent = () => {
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
        heading="About Us"
        description="Explore your full catalog—intelligently optimized by OptiSpiders’ AI for success across every online shelf. Spot what’s popular, what converts best, and what’s primed for your campaigns."
        //Navigate to /home and /services
        onPrimaryBtnClick={() => router.push('/')}
        onSecondaryBtnClick={() => router.push('/services')}
      />
    </div>
  )
}
