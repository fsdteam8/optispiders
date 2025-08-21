import React from "react";
import SmarterAutomation from "../shared/ReuseableThree";
const showcaseItems = [
  {
    title: "Gain Clarity. Take Control. Accelerate Performance.",
    description:
      "OptiSpiders Advanced Analytics Suite is your all-in-one command center for smarter retail decisions. Get granular insights that drive growth, reduce waste, and unlock new opportunities across your entire commerce ecosystem.",

    belowtext:
      "Experience effortless control and sharper performance—no matter how complex your strategy.",
    list: [
      " Segment performance by brand, product type, SKU, or custom-defined categories to spot trends before they become problems.",
      "Compare real-time sales and demand signals against previous cycles for smarter forecasting and growth planning.",
      "nstantly distinguish between first-party and third-party market activity to refine your competitive edge.",
      "Overlay performance data with marketing impact, inventory flow, conversion rates, and availability metrics to pinpoint what’s working—and fix what’s not.",
    ],
    link: "OptiSpider Insights Engine",
    span: [
      "Zoom in with precision — ",
      "Track true momentum —",
      "1P vs. 3P clarity — ",
      "See the full commerce picture  —",
    ],
  },
];

const VisibilityIntelligence = () => {
  return (
    <div>
      <div className="container mx-auto">
        <SmarterAutomation
          items={showcaseItems}
          rightImage={"/reuseable/visibility.png"}
          buttonLink={"/"}
        >
          {showcaseItems[0].list && (
            <ul className="list-disc list-inside space-y-5 text-[14px] text-gray-700 mb-4">
              {showcaseItems[0].list.map((bullet, i) => (
                <li key={i}>
                  <span className=" text-[#063668] text-[14px] font-normal leading-[120%]">
                    {showcaseItems[0].span[i]}{" "}
                  </span>{" "}
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </SmarterAutomation>
      </div>
    </div>
  );
};

export default VisibilityIntelligence;
