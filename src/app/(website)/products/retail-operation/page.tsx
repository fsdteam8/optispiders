import React from "react";
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";
import products1 from "../../../../../public/product/OptiSpider.png";
import Hero from "@/components/home/Hero";
import ReadyToTransform from "@/components/shared/ReadyToTransform";
import RatailMediaNetwork from "@/components/shared/RatailMediaNetwork";

 
export default function page() {
  return (
    <div>
      <Hero isStatsShow={false} />
 

      <ServicePaidSearch
        title="Market Intelligence"
        description="At Optispiders, we believe that smart decisions start with clear, actionable insights. Our Market Intelligence tools and reporting give you a detailed view of what’s happening in your category from competitor movement to consumer trends, so you’re never caught off guard. We translate marketplace data into practical guidance tailored to your product lineup. Whether you're tracking performance shifts, planning launches, or diagnosing sales slowdowns, we help you move from guesswork to strategy with confidence."
        image={products1}
        link="#"
      />

      <RatailMediaNetwork
        title="Market Share"
        description="We help brands see where they stand—and where they can grow. Our Market Share reporting gives you a clear, data-backed view of your performance relative to the competition, so every decision is grounded in reality, not guesswork.We go beyond surface level metrics to deliver insights that reflect true marketplace dynamics. Whether you're tracking shifts in category leadership, measuring campaign impact, or identifying new areas for expansion, our data gives you the context needed to move with purpose."
        buttonText="Learn More"
        buttonLink="/"
        imageSrc="/product/market_share.png"
        imageAlt="Market Share"
      />

      <ReadyToTransform />
    </div>
  );
}
