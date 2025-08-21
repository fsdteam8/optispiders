"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const RetailInsights = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          
          <div className="w-full ">
             

             
               
                <div className="mt-2">
                  <Image
                    // ✅ Correct path based on your file location
                    src="/reuseable/retail.png"
                    alt="Chart showing monthly sales trends"
                    width={400}
                    height={250}
                    className="h-auto w-full rounded-md object-cover"
                  />
                </div>
               
          </div>

          {/* Right Column: Text Content */}
          <div className="text-gray-700">
            <h2 className="text-4xl font-bold text-[#063668]">
              Retail Insights
            </h2>
            <p className="mt-4  leading-relaxed text-gray-600">
              Our Retail Insights service empowers your team with the data, analysis, and strategic guidance needed to navigate fast-changing markets and stay ahead of the competition. Whether you&apos;re launching new products, entering new categories, or refining your go-to-market approach, we help you spot opportunities early and pivot when needed. Our insights are built to guide long-term growth while supporting agile decision-making in real time.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Strategic Market Mapping",
                  desc: "Identify where to focus, what segments are growing, and how your brand fits into the broader category landscape.",
                },
                {
                  title: "Performance Diagnostics",
                  desc: "Use advanced analytics to understand what’s working, what’s underperforming, and how specific levers like pricing, content, and stock are impacting sales.",
                },
                {
                  title: "Custom Research & Deep Dives",
                  desc: "Access tailored reports that explore competitive movement, channel shifts, emerging consumer trends, and other factors influencing your retail outcomes.",
                },
                {
                  title: "Market Agility",
                  desc: "Stay adaptive with rolling insights that support ongoing optimization of your launch strategy, promotional calendar, and category positioning.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start">
                  <div className="mt-1 flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-[#063668]">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 10 10">
                      <path  />
                    </svg>
                  </div>
                  <p className="ml-4">
                    <strong className="font-semibold  text-[#063668]">{item.title}</strong> — {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <a
            href="#"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-7 py-3 text-lg font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
            Learn more <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailInsights;