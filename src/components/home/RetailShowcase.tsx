"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { images } from "@/constants/image";

interface ShowcaseItem {
  title: string;
  description: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Transform Your Retail Advertising with Rich Media",
    description:
      "OptiSpiders' Rich Media Service transforms retail advertising into captivating, interactive experiences. Our AI-powered formats—like dynamic video ads, shoppable carousels, and 360° product views—engage shoppers and drive real results. Seamlessly integrated across top retail platforms, our rich media ensures your brand stands out, captures attention, and inspires action every step of the way.",
  },
  {
    title: "OptiSpiders Retail Navigator",
    description:
      "Stay ahead of the competition with OptiSpiders' all-in-one competitive intelligence at your fingertips. Monitor competitor updates, simplify fee recovery, monitor every product's shelf presence, and gain clear, actionable insights with advanced analytics. Prioritize, efficient, and built for modern retail teams who want to stay ahead.",
  },
  {
    title: "OptiSpiders Market Sense",
    description:
      "Unlock deeper market insights with OptiSpiders—track market share, monitor competitors, and analyze your digital shelf with precision. Make smarter decisions, spot opportunities, and stay ahead in every channel.",
  },
];

export default function RetailShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % showcaseItems.length);
          return 0;
        }
        return prev + 100 / 30;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div>
        <Card className="overflow-hidden p-6">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section - 2x2 Grid */}
            <div className="lg:w-1/2 pr-8">
              <div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={images.progressBar}
                    alt="Luxury perfume bottle"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 pl-8">
              <div className="space-y-8">
                {showcaseItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-primary mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {index === currentIndex && (
                      <div className="w-full h-1 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
