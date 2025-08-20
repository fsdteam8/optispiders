import ManagedMedia from "@/components/shared/ManagedMedia";
import service_image_2 from "../../../../public/service/service_image_2.png"
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";

const Page = () => {
  return (
    <div>
      <ManagedMedia
        subtitle="Expert Services"
        title="Produce Content & Creative"
        description="At Optispiders, we develop content solutions engineered to drive performance across digital shelf environments. Our team specializes in building structured, platform optimized assets that enhance discoverability, improve conversion rates, and maintain brand consistency at scale. From item level data to full brand experience, we ensure your content works as hard as your products do."
      />

      <ServicePaidSearch
        title="Product Page Content"
        description="We create and manage optimized product detail page (PDP) content—titles, bullets, long-form descriptions, imagery, and enhanced modules—aligned with search algorithms and consumer behavior data. Every asset is built to meet platform specifications, support SEO, and reduce cart abandonment by improving shopper confidence."
        image={service_image_2}
        link="#"
      />
    </div>
  );
};

export default Page;
