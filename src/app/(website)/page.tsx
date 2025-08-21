import Hero from "@/components/home/Hero";
import { OptiSpidersSection } from "@/components/home/OptiSpidersSection";
import { OurProducts } from "@/components/home/OurProducts";
import { OurService } from "@/components/home/OurService";
import RetailShowcase from "@/components/home/RetailShowcase";
import TrustedBrands from "@/components/home/TrustedBrands";
import ReadyToTransform from "@/components/shared/ReadyToTransform";

import { images } from "@/constants/image";

const itemsOne = [
  {
    title: "Transform Your Retail Advertising with Rich Media",
    description:
      "OptiSpiders’ Rich Media Service transforms retail advertising into captivating, interactive experiences. Our AI-powered formats—like dynamic video ads, shoppable carousels, and 360° product views—engage shoppers and drive real results. Seamlessly integrated across top retail platforms, our rich media ensures your brand stands out, captures attention, and inspires action every step of the way.",
  },
  {
    title: "OptiSpiders Retail Navigator",
    description:
      "Take control of your retail performance with OptiSpiders’ all-in-one app—streamline your content updates, simplify fee recovery, monitor every product’s shelf presence, and gain clear, actionable insights with advanced analytics. Effortless, efficient, and built for modern retail teams who want to stay ahead.",
  },
  {
    title: "OptiSpiders Market Sense",
    description:
      "Unlock deeper market insights with OptiSpiders—track market share, monitor competitors, and analyze your digital shelf with precision. Make smarter decisions, spot opportunities, and stay ahead in every channel.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero isStatsShow={true} />
      <TrustedBrands />

      <div className="border bg-card text-card-foreground shadow rounded-xl container mx-auto">
        <RetailShowcase
          items={itemsOne}
          imageSrc={images.progressBar}
          reverse={false}
        />
      </div>

      {/* <RetailShowcase /> */}

      <OptiSpidersSection />
      <OurProducts />
      <OurService />
      <ReadyToTransform />
    </div>
  );
}
