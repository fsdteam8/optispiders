// import Hero from '@/components/home/Hero'
import ManagedMedia from '@/components/shared/ManagedMedia'
import RatailMediaNetwork from '@/components/shared/RatailMediaNetwork'
import ReadyToTransform from '@/components/shared/ReadyToTransform'
import ReuseableTwo from '@/components/shared/ReuseableTwo'
import ServicePaidSearch from '@/components/shared/ServicePaidSearch'
import SyndicationSupport from '@/components/syndicationSupport/SyndicationSupport'
import service_image_2 from '../../../../../public/service/service_image_2.png'
import retailerBrandImage from '@/../public/service/retailer_brand_image.jpg'
import advertisingImage from '@/../public/service/advertising.jpg'
import { ServiceBanner } from '../_components/ServiceBanner'

const Page = () => {
  return (
    <div>
      <ServiceBanner />
      <ManagedMedia
        subtitle="Expert Services"
        title="Produce Content & Creative"
        description="At Optispiders, we develop content solutions engineered to drive performance across digital shelf environments. Our team specializes in building structured, platform optimized assets that enhance discoverability, improve conversion rates, and maintain brand consistency at scale. From item level data to full brand experience, we ensure your content works as hard as your products do."
      />

      <ServicePaidSearch
        title="Product Page Content"
        description="We create and manage optimized product detail page (PDP) content—titles, bullets, long-form descriptions, imagery, and enhanced modules—aligned with search algorithms and consumer behavior data. Every asset is built to meet platform specifications, support SEO, and reduce cart abandonment by improving shopper confidence."
        image={service_image_2}
        link="/contact-us"
      />

      <RatailMediaNetwork
        title="Retailer Brand Stores"
        description="We design and implement modular brand stores that deliver a curated, on-platform experience for your customers. Leveraging UX best practices and mobile-first design, we showcase your brand architecture, cross-sell opportunities, and campaign messaging—while maintaining compliance with platform design standards"
        buttonText="Learn More"
        buttonLink="/contact-us"
        imageSrc={retailerBrandImage}
        imageAlt="Brand protection"
      />

      <ReuseableTwo
        title="Advertising Creative"
        description="Our team produces static and rich media assets for use in retail media placements, including banners, video, and sponsored brand creatives. All assets are built to specification, optimized for performance testing, and aligned with your campaign objectives, ensuring seamless execution across programmatic, native, and paid search formats."
        buttonText="Learn More"
        buttonLink="/contact-us"
        imageSrc={advertisingImage}
        imageAlt="Optimization Metrics"
      />
      <SyndicationSupport />

      <ReadyToTransform />
    </div>
  )
}

export default Page
