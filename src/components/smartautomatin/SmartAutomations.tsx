import React from "react";
import SmarterAutomation from "../shared/ReuseableThree";
const showcaseItems = [
  {
    title: "Smarter Automation. Total Control.",
    description:
      "Take command of your retail media with OptiSpiders customizable automation engine...",
    bullets: [
      "Dynamic Placement Targeting",
      "Hourly & Intraday Bid Optimization",
      "Automated Rule-Based Campaigns",
      "Context-Aware Adjustments",
      "Outcome-Driven Smart Bidding",
    ],
  },
  {
    title: "Real-Time Optimization",
    description:
      "Experience effortless control and sharper performance—no matter how complex your strategy.",
  },
];

const SmartAutomations = () => {
  return (
    <div className="container mx-auto">
      <SmarterAutomation
        items={showcaseItems}
        rightImage="/Reuseabale/smartautomation.png"
        
      />
    </div>
  );
};

export default SmartAutomations;
