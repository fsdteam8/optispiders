import React from "react";
import SmarterAutomation from "../shared/ReuseableThree";
const showcaseItems = [
  {
    title: "Smarter Automation. Total Control.",
    description:
      "Take command of your retail media with OptiSpiders customizable automation engine...",

    belowtext:
      "Experience effortless control and sharper performance—no matter how complex your strategy.",
    list: [
      "Dynamic Placement Targeting",
      "Hourly & Intraday Bid Optimization",
      "Automated Rule-Based Campaigns",
      "Context-Aware Adjustments",
      "Outcome-Driven Smart Bidding",
    ],
  },
];

const SmartAutomations = () => {
  return (
    <div className="container mx-auto">
      <SmarterAutomation
        items={showcaseItems}
        rightImage={"/reuseable/smartautomation.png"}
        buttonLink={"/"}
      >
        {showcaseItems[0].list && (
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
            {showcaseItems[0].list.map((bullet, i) => (
              <li key={i}> {bullet}</li>
            ))}
          </ul>
        )}
      </SmarterAutomation>
    </div>
  );
};

export default SmartAutomations;
