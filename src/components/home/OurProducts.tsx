import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { images } from '@/constants/image'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function OurProducts() {
  return (
    <section className="container">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium text-primary mb-4">Our Products</h2>
        <p className="text-gray-600">
          Cutting-edge solutions designed to optimize your digital commerce
          presence and drive meaningful results.
        </p>
      </div>

      {/* Main Content */}
      <Card className="grid lg:grid-cols-2 gap-14 items-center p-6">
        {/* Left Card - AI-Powered Content Optimization */}
        <div>
          <Image
            src={images.ourProduct}
            alt="product.png"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>

        {/* Right Content - Content Optimization Details */}
        <div className="space-y-6">
          <div>
            <button className="flex items-center gap-2 py-2 px-2 bg-gray-100 rounded-3xl text-primary text-xs">
              <Globe /> Smarter Commerce
            </button>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Content Optimization
            </h3>
            <div className="text-gray-600">
              <p className="text-sm">
                Save time and boost conversions with intelligent, AI-driven
                content recommendations.
              </p>
              <p className="text-sm">
                Our proprietary dataset helps OptiSellers generative AI to
                analyze and optimize your product listings — improving titles,
                descriptions, and keywords.
              </p>
              <p className="text-sm">
                Stop spending hours reviewing product content manually. Let
                OptiSellers streamline the process with smart automation
                designed to maximize your retail success.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* View All Products Button */}
      <div className="text-center mt-12">
        <Link href="/products/brands-and-shoppers-connect-instantly">
          <Button className="bg-primary text-white px-6 py-2 rounded-full">
            View All Products →
          </Button>
        </Link>
      </div>
    </section>
  )
}
