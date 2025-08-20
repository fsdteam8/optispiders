import React from "react";
import RatailMediaNetwork from "../shared/RatailMediaNetwork";

const BrandStores = () => {
  return (
    <section>
      <div className="">
        <RatailMediaNetwork
          title="Retailer Brand Stores"
          description="We design and implement modular brand stores that deliver a curated, on-platform experience for your customers. Leveraging UX best practices and mobile-firstdesign, we showcase your brand architecture, cross-sell opportunities, and campaign messaging—while maintaining compliance with platform design standards."
          buttonText="Learn More"
          buttonLink="/learn-more"
          imageSrc="/Reuseabale/brandStores.png"
          imageAlt="Brand Stores"
        />
      </div>
    </section>
  );
};

export default BrandStores;
