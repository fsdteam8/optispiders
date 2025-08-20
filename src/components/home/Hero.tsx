import { images } from "@/constants/image";
import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundColor: "#38303084",
      }}
      className="min-h-[70vh] text-white flex flex-col items-center justify-center"
    >
      <div className="container flex flex-col gap-6 lg:flex-row justify-between items-center">
        <div>
          <h1 className="flex items-center gap-2 text-[#4299e1]">
            <Star /> Smarter Retail Starts Here
          </h1>

          <h1 className="my-5 text-4xl font-semibold max-w-2xl">
            Dominate the <span className="text-blue-500">digital shelf</span>{" "}
            with <span className="text-blue-500">AI-powered</span> solutions.
          </h1>

          <p className=" lg:max-w-2xl">
            OptiSpiders empowers leading brands to scale sales and outpace the
            competition using advanced AI, data-driven SEO, compelling
            content,and strategic marketplace optimization.
          </p>

          <div className=" space-x-5 mt-8">
            <Button>
              Get Started <ArrowRight />
            </Button>
            <Button className="bg-inherit border border-white text-white">
              View Products
            </Button>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={images.heroImg}
              alt="hero.png"
              width={1000}
              height={1000}
              className="h-[450px] w-[450px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
