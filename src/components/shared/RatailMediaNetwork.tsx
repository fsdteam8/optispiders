import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface RatailMediaNetworkProps {
  title: string
  description: string
  buttonText: string
  buttonLink?: string
  imageSrc: StaticImageData | string
  imageAlt: string
  toptext?: string
}

const RatailMediaNetwork = ({
  toptext,
  title,
  description,
  buttonText,
  buttonLink = '/contact-us',
  imageSrc,
  imageAlt,
}: RatailMediaNetworkProps) => {
  return (
    <section className=" shadow-md bg-[#FAFAFA] my-12">
      <div className="container mx-auto py-12 ">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="md:w-1/2">
            {toptext && (
              <a
                href="/products/brands-and-shoppers-connect-instantly"
                className="text-[#007BFF] text[16px] font-normal mb-4 cursor-pointer"
              >
                {toptext}
              </a>
            )}
            <h2 className="text-[#063668] text-[24px] md:text-[32px] font-bold mb-6">
              {title}
            </h2>
            <p className="md:text-sm text-sm font-normal text-[#2F2F2F] mb-12 leading-[120%]">
              {description.includes('<br') ? (
                <span dangerouslySetInnerHTML={{ __html: description }} />
              ) : (
                description
              )}
            </p>
            <a
              href={buttonLink}
              className="bg-[#2793D7] text-white px-[36px] py-[13px] shadow-sm rounded-xl text-[18px]"
            >
              {buttonText} →
            </a>
          </div>
          <div className="md:w-[40%] mt-10 md:mt-0 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RatailMediaNetwork
