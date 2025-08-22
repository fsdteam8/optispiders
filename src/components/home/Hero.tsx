import Stats from "@/app/(website)/_components/stats";
import { images } from "@/constants/image";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = ({ isStatsShow }: { isStatsShow: boolean }) => {
  return (
    <div className="relative">
      <div
        className="relative min-h-[70vh] h-auto py-[100px] text-white flex flex-col items-center justify-center bg-center bg-cover bg-primary"
        style={{
          backgroundImage: `url(https://files.edgestore.dev/rzoslohhv2lk81i6/optispiders/_public/banner.webp)`,
        }}
      >
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-white/5 transition-colors duration-300" />
        {/* adjust /30 → /20 or /40 for more/less transparency */}

        <div className="container relative z-10 flex flex-col gap-6 lg:flex-row justify-between items-center">
          <div>
            <h1 className="flex items-center text-[14px] gap-2 text-[#4299e1]">
              <Star className="h-4 w-4" /> Smarter Retail Starts Here
            </h1>

            <h1 className="my-5 text-4xl font-semibold max-w-2xl">
              Dominate the <span className="text-blue-500">digital shelf</span>{" "}
              with <span className="text-blue-500">AI-powered</span> solutions.
            </h1>

            <p className="lg:max-w-2xl">
              OptiSpiders empowers leading brands to scale sales and outpace the
              competition using advanced AI, data-driven SEO, compelling
              content,and strategic marketplace optimization.
            </p>

            <div className="space-x-5 mt-8">
              <Button className="bg-[#2793D7] hover:bg-[#2793D7]/80">
                Get Started <ArrowRight />
              </Button>
              <Button className="bg-inherit border hover:bg-white/20 border-white/50 text-white">
                View Products
              </Button>
            </div>
          </div>

          <div>
            <div className="w-full max-w-[535px]">
              <Image
                src={images.heroImg}
                alt="Hero image"
                width={535}
                height={535}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isStatsShow ? "" : "hidden"}`}>
        <Stats />
      </div>
    </div>
  );
};

export default Hero;
