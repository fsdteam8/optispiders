import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import { IoIosStats } from "react-icons/io";
import { PiLightningBold } from "react-icons/pi";
import { LuShield } from "react-icons/lu";

const ReadyToTransform = () => {
  return (
    <section className='ReadyToTransform bg-[#063668] w-full h-auto'>
        <div className="container font-inter">
            <div className="py-20 text-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">
                    Ready to Transform Your Digital Commerce?
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg  mx-auto">
                    Join hundreds of leading brands who&apos;ve optimized their online presence and maximized their ROI with our solutions.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 ">
                
                    <div className="bg-[#FFFFFF1A] rounded-2xl shadow-lg p-8 w-full md:w-1/3 text-center">
                        <div className="flex justify-center mb-4">
                        <div className="bg-[#2793D71A] rounded-full p-4">
                            <IoIosStats className="text-[#4299E1] text-3xl" />
                        </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Increase Sales</h3>
                        <p className="text-white text-base">
                        Our clients see an average 35% increase in digital commerce revenue
                        </p>
                    </div>
                

                    <div className="bg-[#FFFFFF1A]  rounded-2xl shadow-lg p-8 w-full md:w-1/3  text-center">
                        <div className="flex justify-center mb-4">
                        <div className="bg-[#2793D71A] rounded-full p-4">
                            <PiLightningBold className="text-[#4299E1] text-3xl" />
                        </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Optimize Spend</h3>
                        <p className="text-white text-base">
                        A content score of 95% or higher is our standard—and we&apos;re committed to keeping it that way.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF1A] rounded-2xl shadow-lg p-8 w-full md:w-1/3  text-center">
                        <div className="flex justify-center mb-4">
                        <div className="bg-[#2793D71A] rounded-full p-4">
                            <LuShield className="text-[#4299E1] text-3xl" />
                        </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Protect Your Brand</h3>
                        <p className="text-white text-base">
                        Eliminate unauthorized sellers and MAP violations
                        </p>
                    </div>
            </div>
            <div className="flex justify-center mt-20 py-10">
                    <div className="flex flex-col md:flex-row gap-5 w-full max-w-xl px-5 justify-center">
                       
                       <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-400 text-white text-center font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                       Get Started
                       <HiArrowRight className="text-lg" />
                       </button>

                       
                       <button className="w-full md:w-auto border border-white text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                       Explore Products
                       </button>
                    </div>
                </div>

        </div>
    </section>
  )
}

export default ReadyToTransform