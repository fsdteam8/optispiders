import React from "react";
import ReuseableTwo from "../shared/ReuseableTwo";

const FeeRecovery = () => {
  return (
    <section>
      <div className="">
        <ReuseableTwo
          title="Fee Recovery"
          description="Hidden charges and billing discrepancies can quietly eat into your margins. We analyze your transaction history, advertising expenditure, and fulfillment fees to uncover overcharges or errors. Our team works directly with platform support teams to file claims, recover lost revenue, and ensure your financial records are accurate. It's the money you earned our job is to help you get it back. "
          buttonText="Learn More"
          buttonLink="/"
          imageSrc="/Reuseabale/feerecovery.png"
          imageAlt="Fee Recovery"
        />
      </div>
    </section>
  );
};

export default FeeRecovery;
