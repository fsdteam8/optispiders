"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { brands, brandsRow2 } from "../../../utils/brand";

export default function TrustedBrands() {
  return (
    <section className="pt-16 text-center">
      <button className="mb-4 rounded-3xl bg-gray-100 py-2 px-8 text-blue-500">
        Marketplaces
      </button>

      <h2 className="mb-4 text-3xl font-semibold text-primary">
        &quot;Trusted by <span>Leading Brands</span>&quot;
      </h2>

      <p className="mb-12 mx-auto max-w-2xl text-muted-foreground">
        See how we&lsquo;ve helped businesses like yours achieve remarkable
        results in the digital commerce landscape.
      </p>

      {/* Row 1 */}
      <Marquee speed={50} gradient={false} pauseOnHover>
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.logo}
            alt={brand.name}
            width={1000} // keeps high-quality image source
            height={1000}
            className="mx-6 h-20 w-auto object-contain"
          />
        ))}
      </Marquee>

      {/* Row 2 */}
      <div className="mt-6">
        <Marquee speed={50} gradient={false} pauseOnHover direction="right">
          {brandsRow2.map((brand, index) => (
            <Image
              key={index}
              src={brand.logo}
              alt={brand.name}
              width={1000} // same here
              height={1000}
              className="mx-6 h-20 w-auto object-contain"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
