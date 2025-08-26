import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SyndicationSupport = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="bg-[#FAFAFA] scroll-mt-24">
      <div className="container mx-auto my-32 ">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
          <div className="md:w-[60%]">
            <h2 className="text-[#063668] text-[32px] md:text-[48px] font-bold mb-4">
              Content Syndication Support
            </h2>
            <p className="text-xs md:text-[16px] font-normal text-[#2F2F2F] mb-12 leading-[120%]">
              We provide full support for content distribution via syndication
              platforms and direct uploads. Our process ensures product data,
              digital assets, and creative content are correctly formatted,
              version-controlled, and distributed efficiently—minimizing content
              drift, preserving brand consistency, and maximizing accuracy,
              visibility, and performance across all key digital retail
              endpoints.
            </p>
            <Link href="/contact-us">
              <button className=" bg-[#2793D7] text-white px-[36px] py-[13px] rounded-xl text-[16px] lg:text-[18px]">
                Learn more →
              </button>
            </Link>
          </div>
          <div className="md:w-[30%] w-[80%] mx-auto md:mx-0  md:mt-0">
            <Image
              src={'/reuseable/syndication.png'}
              alt="syndication support"
              width={527}
              height={527}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SyndicationSupport
