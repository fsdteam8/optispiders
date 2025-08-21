import Hero from "@/components/home/Hero";
import { OptiSpidersSection } from "@/components/home/OptiSpidersSection";
import { OurProducts } from "@/components/home/OurProducts";
import { OurService } from "@/components/home/OurService";
import RetailShowcase from "@/components/home/RetailShowcase";
import TrustedBrands from "@/components/home/TrustedBrands";
import ReadyToTransform from "@/components/shared/ReadyToTransform";

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero isStatsShow={true} />
      <TrustedBrands />
      <RetailShowcase />
      <OptiSpidersSection />
      <OurProducts />
      <OurService />
      <ReadyToTransform />
    </div>
  );
}
