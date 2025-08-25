import React from 'react'
import ServicePaidSearch from '@/components/shared/ServicePaidSearch'
import products1 from '../../../../../public/product/OptiSpider.png'
// import Hero from "@/components/home/Hero";
import ReadyToTransform from '@/components/shared/ReadyToTransform'
import RatailMediaNetwork from '@/components/shared/RatailMediaNetwork'
import RetailInsights from '../_components/RetailInsite'
import { ProductsBanner } from '../_components/ProductsBanner'
import slugify from '@/lib/slugify'

export default function page() {
  return (
    <div>
      <ProductsBanner />

      <ServicePaidSearch
        id={slugify('market-intelligence')}
        title="Market Intelligence"
        description="At Optispiders, we believe that smart decisions start with clear, actionable insights. Our Market Intelligence tools and reporting give you a detailed view of what’s happening in your category from competitor movement to consumer trends, so you’re never caught off guard. We translate marketplace data into practical guidance tailored to your product lineup. Whether you're tracking performance shifts, planning launches, or diagnosing sales slowdowns, we help you move from guesswork to strategy with confidence."
        image={products1}
        link="/contact-us"
      />

      <RatailMediaNetwork
        id={slugify('market-share')}
        title="Market Share"
        description="We help brands see where they stand—and where they can grow. Our Market Share reporting gives you a clear, data-backed view of your performance relative to the competition, so every decision is grounded in reality, not guesswork.We go beyond surface level metrics to deliver insights that reflect true marketplace dynamics. Whether you're tracking shifts in category leadership, measuring campaign impact, or identifying new areas for expansion, our data gives you the context needed to move with purpose."
        buttonText="Learn More"
        buttonLink="/contact-us"
        imageSrc="/product/market_share.png"
        imageAlt="Market Share"
      />

      <RetailInsights id={slugify('retail-insights')} />

      <RatailMediaNetwork
        id={slugify('digital-shelf-intelligence')}
        toptext="digital-shelf"
        title="Turn online impressions into measurable growth"
        description="Your digital shelf is your brand’s storefront in the online marketplace—where shoppers discover, evaluate, and decide. At OptiSpiders, we transform that moment into opportunity.
         <br /> <br /> Leverage our real-time visibility to monitor how your products perform across search, availability, and content. Identify what’s working, pinpoint gaps, and take data-backed action to boost conversions and outpace the competition. "
        buttonText="Learn More"
        buttonLink="/contact-us"
        imageSrc="/reuseable/digitalShelf.png"
        imageAlt="trun online impressions into measurable growth"
      />

      <ReadyToTransform />
    </div>
  )
}
