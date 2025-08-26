import Stats from '@/app/(website)/_components/stats'
import { ArrowRight } from 'lucide-react'
import { HeroProps } from '../../../types/banner'
import { Button } from '../ui/button'
import MainBanner from '@/../public/product/main-banner.png'
import type { StaticImageData } from 'next/image'

type BgType = string | StaticImageData

const HeroBannerTwo: React.FC<HeroProps & { bgImage?: BgType }> = ({
  isStatsShow = false,
  badgeText,
  badgeIcon,
  heading,
  coloredHeading,
  description,
  primaryBtnText = 'Get Started',
  primaryBtnIcon = <ArrowRight />,
  onPrimaryBtnClick,
  secondaryBtnText = 'View Products',
  onSecondaryBtnClick,
  secondaryBtnVariant = 'outline',
  bgImage = MainBanner, // can be string `/product/main-banner.png` or import object
}) => {
  // Normalize to a string URL no matter what was passed
  const bg =
    typeof bgImage === 'string' ? bgImage : (bgImage as StaticImageData).src

  return (
    <div className="relative">
      <div
        className="relative min-h-[70vh] py-[100px] text-white flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container relative z-10 flex justify-start items-center">
          <div className="flex-1 text-left max-w-2xl">
            {badgeText && (
              <h1 className="flex items-center justify-start text-sm gap-2 text-[#4299e1]">
                {badgeIcon} {badgeText}
              </h1>
            )}

            <h1 className="my-5 leading-[2.8] text-3xl sm:text-4xl lg:text-[42px] font-semibold">
              {`${heading}`}
              <span className="text-[#0070f3]">{coloredHeading}</span>
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
                  className="bg-inherit border hover:bg-white/20 border-white/50 text-white hover:text-white"
                  onClick={onSecondaryBtnClick}
                >
                  {secondaryBtnText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isStatsShow && (
        <div>
          <Stats />
        </div>
      )}
    </div>
  )
}

export default HeroBannerTwo
