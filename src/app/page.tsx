import Advertising from "@/components/advertising/Advertising";
import BrandProtection from "@/components/brandProtection/BrandProtection";
import BrandStores from "@/components/brandStores/BrandStores";
import FeeRecovery from "@/components/feeRecovery/FeeRecovery";
import Hero from "@/components/home/Hero";
import MediaNetwork from "@/components/mediaNetwork.tsx/MediaNetwork";
import OptimizationMetrics from "@/components/metrics/OptimizationMetrics";
import SyndicationSupport from "@/components/syndicationSupport/SyndicationSupport";

export default function Home() {
  return (
    <div>
      <Hero />
      <MediaNetwork />
      <BrandStores />
      <BrandProtection />
      <OptimizationMetrics />
      <Advertising />
      <FeeRecovery />

      <SyndicationSupport />
    </div>
  );
}
