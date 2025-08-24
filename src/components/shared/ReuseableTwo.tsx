import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface ReuseableTwoProps {
  title: string
  description: string
  buttonText: string
  buttonLink?: string
  imageSrc: StaticImageData | string
  imageAlt: string
}
const ReuseableTwo = ({
  title,
  description,
  buttonText,
  buttonLink = '#',
  imageSrc,
  imageAlt,
}: ReuseableTwoProps) => {
  return (
    <section className="shadow-md bg-white">
      <div className="container mx-auto py-16">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
          <div className="md:w-[35%] mt-10 md:mt-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={727}
              height={727}
              className="object-cover rounded-[8px]"
            />
          </div>
          <div className="md:w-[60%]">
            <h2 className="text-[#063668] text-[32px] md:text-[48px] font-bold mb-6">
              {title}
            </h2>
            <p className="text-xs md:text-[16px] font-normal text-[#2F2F2F] mb-12 leading-[120%]">
              {description}
            </p>
            <a
              href={buttonLink}
              className="bg-[#2793D7] shadow-sm text-white px-[36px] py-[13px] rounded-xl text-[18px]"
            >
              {buttonText} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReuseableTwo
