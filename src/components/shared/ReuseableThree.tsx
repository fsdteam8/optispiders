"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ShowcaseItem {
  title: string;
  description: string;
  list?: string[];
  image?: string;
  belowtext?: string;
  link?:string;
}

interface ShowcaseProps {
  items: ShowcaseItem[];
  rightImage: string;
  buttonLink?: string;
    children?: React.ReactNode;
}

const SmarterAutomation: React.FC<ShowcaseProps> = (
  { items, rightImage, buttonLink, children },
  
) => {
  const [currentIndex] = useState(0);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         setCurrentIndex((current) => (current + 1) % items.length);
  //         return 0;
  //       }
  //       return prev + 100 / 80;
  //     });
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [items.length]);

  return (
    <section>
      <div className="container mx-auto py-12">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {item.link && (   <p className=" text-[#007BFF] text-16px font-normal leading-[120%] mb-2">{item.link}
                    
                  </p>)

                  }
                  <h3 className="text-[32px] font-bold text-primary mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Progress Bar */}
                  {/* {index === currentIndex && (
                    <div className="w-full h-1 bg-gray-200 rounded-full mb-3">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )} */}

                  {/* Animate Description */}
                  <AnimatePresence initial={false}>
                    {index === currentIndex && (
                      <motion.div
                        key="description"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-base leading-relaxed  mb-4">
                          {item.description}
                        </p>

                        {/* {item.list && (
                          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                            {item.list.map((bullet, i) => (
                              <li key={i}> {bullet}</li>
                            ))}
                          </ul>
                        )} */}
                        {children}

                        <p className="text-sm font-normal leading-[120%] text-[#2F2F2F] mb-8">
                          {item.belowtext}
                        </p>
                        {buttonLink && (
                          <a
                            href={buttonLink}
                            className=" bg-[#2793D7] w-[192px] h-[48px] text-center shadow-sm text-white  flex items-center justify-center  rounded-xl text-[18px]"
                          >
                            Learn More →
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Illustration */}
            <div className="">
              <Image
                src={rightImage}
                alt="Illustration"
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterAutomation;
