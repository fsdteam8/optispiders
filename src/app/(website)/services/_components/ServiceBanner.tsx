'use client'

import HeroBannerTwo from '@/components/shared/Banner'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const ServiceBanner = () => {
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
        imageSrc="/reuseable/hero-banner.png"
        heading="Maximize Your Potential "
        coloredHeading="with Opti Spiders Expert Solutions."
        description="Discover our complete range of AI-driven, privacy-focused retail media solutions—offering everything from smart ad placements to automated content optimization. Built to grow your brand with speed, accuracy, and total control."
        //Navigate to /home and /services
        onPrimaryBtnClick={() => router.push('/services/managed-media')}
        onSecondaryBtnClick={() =>
          router.push('/products/brands-and-shoppers-connect-instantly')
        }
      />
    </div>
  )
}
