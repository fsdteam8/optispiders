import Hero from "@/components/home/Hero";
import ManagedMedia from "@/components/shared/ManagedMedia";
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";
import paidSearchImg from "../../../../public/service/service_Image1.png";
import RatailMediaNetwork from "@/components/shared/RatailMediaNetwork";
import ReadyToTransform from "@/components/shared/ReadyToTransform";
import ReuseableTwo from "@/components/shared/ReuseableTwo";

const Page = () => {
  return (
    <div>
      <Hero />

      <ManagedMedia
        subtitle="Expert Services"
        title="Managed Media"
        description="Our Managed Media service at Optispider is designed to drive real results across major online retail platforms. We take a hands-on approach to campaign management—combining data, automation, and strategic planning to make sure your products appear in front of the right shoppers at the perfect time. Our focus is on growing your visibility, boosting conversions, and improving return on ad spend (ROAS), all while keeping your advertising budget efficient and effective."
      />

      <ServicePaidSearch
        title="Paid Search"
        description="Search ads are a powerful tool to reach shoppers who are already looking for what you are offering. We identify high-performing keywords, optimize product listings, and actively manage bids to ensure your products rank competitively in search results. By analyzing traffic patterns and shopper behavior, we position your listings for maximum exposure and strong sales performance."
        image={paidSearchImg}
        link="#"
      />

      <RatailMediaNetwork
        title="Brand Protection"
        description="Your brand is your most asset and in today’s crowded digital shelves, it needs constant defense. We monitor listings for unauthorized sellers, pricing violations, inaccurate product details, and counterfeit activity. Our team acts quickly, identifies issues, corrects content, and maintains brand consistency, ensuring that your presence across the platform reflects your standards and values."
        buttonText="Learn More"
        buttonLink="/"
        imageSrc="/Reuseabale/brandProtection.png"
        imageAlt="Brand protection"
      />

      <ReuseableTwo
        title="Optimization Metrics"
        description="We analyze real-time campaign data to optimize strategies, enhance targeting precision, and maximize ROAS. Through ongoing performance refinement, bid adjustments, and trend analysis, we ensure every advertising dollar delivers measurable impact, driving stronger conversions, greater efficiency, and sustainable growth across all major digital retail platforms. "
        buttonText="Learn More"
        buttonLink="/"
        imageSrc="/Reuseabale/metrics.png"
        imageAlt="Optimization Metrics"
      />

      <ReadyToTransform />
    </div>
  );
};

export default Page;
