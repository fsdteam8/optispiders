import React from "react";
import ReuseableTwo from "../shared/ReuseableTwo";

const Advertising = () => {
  return (
    <section>
      <div className="">
        <ReuseableTwo
          title="Advertising Creative"
          description="Our team produces static and rich media assets for use in retail media placements, including banners, video, and sponsored brand creatives. All assets are built to specification, optimized for performance testing, and aligned with your campaign objectives, ensuring seamless execution across programmatic, native, and paid search formats. "
          buttonText="Learn More"
          buttonLink="/learn-more"
          imageSrc="/Reuseabale/advertising.png"
          imageAlt="Advertising"
        />
      </div>
    </section>
  );
};

export default Advertising;
