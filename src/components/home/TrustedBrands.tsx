"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "TheTradeDesk", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Mercado Libre", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Mops", logo: "/placeholder.svg?height=40&width=120" },
  { name: "DoorDash", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Criteo", logo: "/placeholder.svg?height=40&width=120" },
  { name: "TikTok Shop", logo: "/placeholder.svg?height=40&width=120" },
];

const brandsRow2 = [
  { name: "Amazon Advertising", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Shopee", logo: "/placeholder.svg?height=40&width=120" },
  { name: "PromoteIQ", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Target", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Kroger", logo: "/placeholder.svg?height=40&width=120" },
];

export default function TrustedBrands() {
  return (
    <section className="text-center pt-16">
      <div>
        <button className="bg-gray-100 py-2 px-8 rounded-3xl text-blue-500 mb-4">
          Marketplaces
        </button>

        {/* Header */}
        <h2 className="text-3xl font-semibold mb-4 text-primary">
          &quot;Trusted by <span>Leading Brands</span>&quot;
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how we&lsquo;ve helped businesses like yours achieve remarkable
          results in the digital commerce landscape.
        </p>

        <div className="mb-6">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-lg min-w-[160px] h-20 mx-3"
                style={{ backgroundColor: "#333462" }}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  height={1000}
                  width={1000}
                  className="max-h-8 max-w-[120px] object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div>
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            direction="right"
          >
            {brandsRow2.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-lg min-w-[160px] h-20 mx-3"
                style={{ backgroundColor: "#333462" }}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  height={1000}
                  width={1000}
                  className="max-h-8 max-w-[120px] object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
