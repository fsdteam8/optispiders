import Image from "next/image";
import React from "react";
interface RatailMediaNetworkProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
}

const RatailMediaNetwork = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
  imageSrc,
  imageAlt,
}: RatailMediaNetworkProps) => {
  return (
    <section className=" shadow-md bg-[#FAFAFA]">
      <div className="container mx-auto py-32 ">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-[#063668] text-[32px] md:text-[48px] font-bold mb-6">
              {title}
            </h2>
            <p className="text-xs md:text-[16px] font-normal text-[#2F2F2F] mb-12 leading-[120%]">
              {description}
            </p>
            <a
              href={buttonLink}
              className="bg-[#2793D7] text-white px-[36px] py-[13px] rounded-xl text-[18px]"
            >
              {buttonText} →
            </a>
          </div>
          <div className="md:w-[40%] mt-10 md:mt-0">
            <Image src={imageSrc} alt={imageAlt} width={527} height={527} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatailMediaNetwork;
