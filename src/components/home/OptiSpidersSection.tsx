import { Card } from "../ui/card"
import Image from "next/image"
import { images } from "@/constants/image"

export function OptiSpidersSection() {
  return (
    <div className="container ">
      <Card className="grid lg:grid-cols-2 gap-12 items-center p-6">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Main Heading with Underline */}
          <div>
            <h1 className="text-xl font-bold text-primary mb-2">
              Navigate Retail&apos;s Next Frontier with OptiSpiders
            </h1>
          </div>

          {/* Unlock Limitless Retail Potential */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Unlock Limitless Retail Potential</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Empower your team with agile tools and dedicated support to grow faster, adapt smarter, and capture new
              markets. OptiSpiders helps you expand your reach and thrive—no matter how fast ecommerce evolves.
            </p>
          </div>

          {/* Simplify. Optimize. Succeed. */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Simplify. Optimize. Succeed.</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Streamline your daily operations with automated workflows, intuitive content management, and real-time
              shelf monitoring—all in one place. Cut the busy work and let your team focus on what matters most: growth.
            </p>
          </div>

          {/* Elevate Your Brand Presence */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Elevate Your Brand Presence</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Shine in every marketplace with precision ad placements, unified campaign management, and seamless brand
              protection. OptiSpiders amplifies your products and ensures you outpace the competition, everywhere your
              shoppers are.
            </p>
          </div>

          {/* Turn Insights into Action */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Turn Insights into Action</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              See the big picture with actionable dashboards, instant market alerts, and deep analytics. From pricing
              trends to shopper behavior, OptiSpiders empowers smarter decisions and stronger results at every turn.
            </p>
          </div>
        </div>

        {/* Right Feature Card */}
        <div>
          <Image 
          src={images.optispider}
          alt="optispider.png"
          width={1000}
          height={1000}
          className="rounded-lg"
          />
        </div>
      </Card>
    </div>
  )
}
