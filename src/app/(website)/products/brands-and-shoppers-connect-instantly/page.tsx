import TransformCommerce from '@/components/shared/TransformCommerce'
import { ProductsBanner } from '../_components/ProductsBanner'
import { ProductsFeatureOne } from '../_components/ProductsFeatureOne'
import retailImage from '@/../public/reuseable/retial-media.png'

const Page = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <ProductsBanner />
      {/* products container */}
      <section className="">
        <ProductsFeatureOne
          title="Where Brands and Shoppers Connect Instantly"
          description="Step into the future of retail media with OptiSpiders—a platform designed for visionaries. Our advanced suite doesn’t just place ads; it intelligently bridges your products to high-intent shoppers, amplifying your brand at every digital touchpoint. From precision targeting to live, actionable insights and seamless brand elevation, OptiSpiders empowers you to own every moment on the digital shelf. Trusted by forward-thinking brands aiming for growth without limits.
"
          buttonLink="#"
          image={retailImage}
          isLeft={true}
        />
      </section>
      <TransformCommerce />
    </div>
  )
}

export default Page
