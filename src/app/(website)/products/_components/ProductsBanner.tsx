'use client'

import HeroBannerTwo from '@/components/shared/Banner'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
        heading="Uncover Every Product,"
        coloredHeading="Ignite Every Campaign."
        description="Explore your complete catalog—AI-tuned by OptiSpiders for peak performance on every digital shelf. Spot trends, track top converters, and find the perfect picks for your next campaign."
        onPrimaryBtnClick={() => router.push('/services/managed-media')}
        onSecondaryBtnClick={() =>
          router.push('/products/brands-and-shoppers-connect-instantly')
        }
      />
    </div>
  )
}
