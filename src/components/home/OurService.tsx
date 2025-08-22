import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { images } from '@/constants/image'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function OurService() {
  return (
    <section>
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-primary mb-4">
            Our Service
          </h2>
          <p className="text-gray-600">
            Comprehensive digital commerce solutions tailored to your business
            needs, driving growth and maximizing ROI.
          </p>
        </div>

        {/* Main Content */}
        <Card className=" rounded-none shadow-none border-none bg-white">
          <div className="container grid lg:grid-cols-2 gap-14 items-center p-6">
            {/* left Content - Content Optimization Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Paid Search
                </h3>
                <div className="text-gray-600">
                  <p className="text-sm">
                    Search ads are a powerful tool to reach shoppers who are
                    already looking for what you are offering. We identify
                    high-performing keywords, optimize product listings, and
                    actively manage bids to ensure your products rank
                    competitively in search results. By analyzing traffic
                    patterns and shopper behavior, we position your listings for
                    maximum exposure and strong sales performance.
                  </p>
                </div>

                <div>
                  <button className="py-2 px-5 rounded-lg bg-[#2793d7] text-white flex items-center gap-2 mt-5">
                    Learn more <ArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card - AI-Powered Content Optimization */}
            <div>
              <Image
                src={images.service}
                alt="product.png"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
            </div>
          </div>
        </Card>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link href={'/services/managed-media'}>
            <Button className="bg-primary text-white px-6 py-2 rounded-full">
              View All Services →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
