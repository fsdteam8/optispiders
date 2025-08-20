import Hero from "@/components/home/Hero";
import ManagedMedia from "@/components/shared/ManagedMedia";
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";
import paidSearchImg from "../../../../public/service/service_Image1.png";

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
    </div>
  );
};

export default Page;
