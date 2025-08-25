'use client'

import HeroBannerTwo from '@/components/shared/Banner'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const BlogBanner = () => {
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
        heading="Our "
        coloredHeading="Blogs"
        description="Explore your complete product catalog—enhanced by OptiSpiders’ AI for maximum impact across every digital shelf. Uncover top trends, best converters, and the items primed for your next campaign."
        //Navigate to /home and /services
        onPrimaryBtnClick={() => router.push('/')}
        onSecondaryBtnClick={() => router.push('/services')}
      />
    </div>
  )
}
