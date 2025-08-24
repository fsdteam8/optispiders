// import Hero from '@/components/home/Hero'
import ManagedMedia from '@/components/shared/ManagedMedia'
import RatailMediaNetwork from '@/components/shared/RatailMediaNetwork'
import ReadyToTransform from '@/components/shared/ReadyToTransform'
import ReuseableTwo from '@/components/shared/ReuseableTwo'
import ServicePaidSearch from '@/components/shared/ServicePaidSearch'
import { Globe } from 'lucide-react'
import service_image_3 from '../../../../../public/service/service_image_3.png'
import brandImage from '@/../public/service/brand.png'
import freeRecovery from '@/../public/service/fee.png'
import { ServiceBanner } from '../_components/ServiceBanner'

const Page = () => {
  return (
    <div>
      <ServiceBanner />
      <ManagedMedia
        subtitle="Retail Excellence Services"
        title="Retail Excellence"
        description="Retail Excellence is about more than just sales—it’s about creating seamless shopping experiences, building lasting customer relationships, and setting new standards of service. By combining innovation, efficiency, and insight, it empowers businesses to thrive in a competitive marketplace."
      />

      <ServicePaidSearch
        title="Retail Excellence"
        description="At Optispider, Retail Excellence means ensuring your business runs smoothly, efficiently, and profitably across online marketplaces. We go beyond sales performance focusing on the integrity of your brand, operational compliance, and financial accuracy. With our team monitoring the backend as closely as the front end, you gain peace of mind and better profitability."
        image={service_image_3}
        link="/contact-us"
        subtitle={'Expert Services'}
        icon={<Globe size={20} />}
      />

      <RatailMediaNetwork
        title="Brand Protection"
        description="Your brand is your most asset and in today’s crowded digital shelves, it needs constant defense. We monitor listings for unauthorized sellers, pricing violations, inaccurate product details, and counterfeit activity. Our team acts quickly, identifies issues, corrects content, and maintains brand consistency, ensuring that your presence across the platform reflects your standards and values."
        buttonText="Learn More"
        buttonLink="/contact-us"
        imageSrc={brandImage}
        imageAlt="Brand protection"
      />

      <ReuseableTwo
        title="Fee Recovery"
        description="Hidden charges and billing discrepancies can quietly eat into your margins. We analyze your transaction history, advertising expenditure, and fulfillment fees to uncover overcharges or errors. Our team works directly with platform support teams to file claims, recover lost revenue, and ensure your financial records are accurate. It's the money you earned our job is to help you get it back."
        buttonText="Learn More"
        buttonLink="/contact-us"
        imageSrc={freeRecovery}
        imageAlt="Optimization Metrics"
      />
      <ReadyToTransform />
    </div>
  )
}

export default Page
