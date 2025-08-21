import Stats from '@/app/(website)/_components/stats'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { HeroProps } from '../../../types/banner'

const HeroBannerTwo: React.FC<HeroProps> = ({
  isStatsShow = false,
  badgeText,
  badgeIcon,
  heading,
  description,
  primaryBtnText = 'Get Started',
  primaryBtnIcon = <ArrowRight />,
  onPrimaryBtnClick,
  secondaryBtnText = 'View Products',
  onSecondaryBtnClick,
  secondaryBtnVariant = 'outline',
  imageSrc = '/Reuseabale/hero-banner.png',
  imageAlt = 'Hero image',
  bgImage = 'https://files.edgestore.dev/l2c0thic6lofxtc5/optispiders/_public/banner.webp',
}) => {
  return (
    <div className="relative">
      <div
        className="relative min-h-[70vh] py-[100px] text-white flex flex-col items-center justify-center bg-center bg-cover bg-primary"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/5 transition-colors duration-300" />

        <div className="container relative z-10 flex flex-col gap-10 lg:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">
            {badgeText && (
              <h1 className="flex items-center justify-center lg:justify-start text-sm gap-2 text-[#4299e1]">
                {badgeIcon} {badgeText}
              </h1>
            )}

            <h1 className="my-5 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-90">{description}</p>

            <div className="space-x-4 mt-8">
              {primaryBtnText && (
                <Button
                  className="bg-[#2793D7] hover:bg-[#2793D7]/80"
                  onClick={onPrimaryBtnClick}
                >
                  {primaryBtnText} {primaryBtnIcon}
                </Button>
              )}
              {secondaryBtnText && (
                <Button
                  variant={secondaryBtnVariant}
                  className="bg-inherit border hover:bg-white/20 border-white/50 text-white"
                  onClick={onSecondaryBtnClick}
                >
                  {secondaryBtnText}
                </Button>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full max-w-[550px] h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {isStatsShow && (
        <div>
          <Stats />
        </div>
      )}
    </div>
  )
}

export default HeroBannerTwo
