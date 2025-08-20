import React from "react";
import RatailMediaNetwork from "../shared/RatailMediaNetwork";

const MediaNetwork = () => {
  return (
    <section className="">
      <div className="">
        <RatailMediaNetwork
          title="Retail Media Network"
          description="Welcome to the Retail Media Network, where we connect brands with audiences through innovative advertising solutions."
          buttonText="Learn More"
          buttonLink="/learn-more"
          imageSrc="/Reuseabale/image 89.png"
          imageAlt="media network"
        />
      </div>
    </section>
  );
};

export default MediaNetwork;
