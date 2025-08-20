import ManagedMedia from "@/components/shared/ManagedMedia";
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";
import service_image_3 from "../../../../public/service/service_image_3.png"
import { Globe } from "lucide-react";

const Page = () => {
  return (
    <div>
      <ManagedMedia
        subtitle="Retail Excellence Services"
        title="Retail Excellence"
        description="Retail Excellence is about more than just sales—it’s about creating seamless shopping experiences, building lasting customer relationships, and setting new standards of service. By combining innovation, efficiency, and insight, it empowers businesses to thrive in a competitive marketplace."
      />

      <ServicePaidSearch
        title="Retail Excellence"
        description="At Optispider, Retail Excellence means ensuring your business runs smoothly, efficiently, and profitably across online marketplaces. We go beyond sales performance focusing on the integrity of your brand, operational compliance, and financial accuracy. With our team monitoring the backend as closely as the front end, you gain peace of mind and better profitability."
        image={service_image_3}
        link="#"   
        subtitle={"Expert Services"} 
        icon={<Globe size={20} />}
      />
    </div>
  );
};

export default Page;
