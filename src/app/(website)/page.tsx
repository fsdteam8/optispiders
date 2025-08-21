import Hero from "@/components/home/Hero";
import RetailShowcase from "@/components/home/RetailShowcase";
import TrustedBrands from "@/components/home/TrustedBrands";

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero isStatsShow={true} />
      <TrustedBrands />
      <RetailShowcase />
    </div>
  );
}
