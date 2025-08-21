import TransformCommerce from "@/components/shared/TransformCommerce";
import { ProductsBanner } from "../_components/ProductsBanner";
// import { ProductsFeatureOne } from "../_components/ProductsFeatureOne";
import product5 from "@/../public/product/product5.png";
import products3 from "@/../public/product/products3.png";
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";
import products1 from "../../../../../public/product/products1.png";
import RatailMediaNetwork from "@/components/shared/RatailMediaNetwork";
import RetailShowcase from "@/components/home/RetailShowcase";
import { images } from "@/constants/image";

const itemsTwo = [
  {
    title: "Unlock sustainable, authentic, and measurable incremental growth",
    description:
      "Accurately measure your advertising impact by comparing sales during ad exposure against periods without ads — revealing the true effectiveness of your campaigns.OptiSpiders provides tailored recommendations focused on the products and keywords with the highest potential to boost your incremental sales and maximize ROI.",
  },
  {
    title: "Protect, expand, and consistently grow your market share",
    description:
      "Seamlessly track, analyze, and respond to evolving market trends with OptiSpiders’ comprehensive market intelligence platform. Distinguish between first-party and third-party dynamics, uncover category insights, and gain competitive intelligence — empowering you to optimize both retail operations and media strategies with confidence.",
  },
  {
    title: "Your data, your insights, your strategy, your control, your way",
    description:
      "Gain real-time, holistic visibility across your retail media universe with OptiSpiders’ custom reporting suite. Effortlessly segment, filter, and visualize your performance data across every retailer and channel—infinitely customizable to match your internal reporting needs. Build, save, and share dashboards that fit your business, not the other way around.",
  },
];

const Page = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <ProductsBanner />

      {/* products container */}
      {/* <section className="">
        <ProductsFeatureOne
          title="Where Brands and Shoppers Connect Instantly"
          description="Step into the future of retail media with OptiSpiders—a platform designed for visionaries. Our advanced suite doesn’t just place ads; it intelligently bridges your products to high-intent shoppers, amplifying your brand at every digital touchpoint. From precision targeting to live, actionable insights and seamless brand elevation, OptiSpiders empowers you to own every moment on the digital shelf. Trusted by forward-thinking brands aiming for growth without limits.
"
          buttonLink="#"
          image={retailImage}
          isLeft={true}
        />
      </section> */}

      <div className="mt-20">
        <ServicePaidSearch
          title="Where Brands and Shoppers Connect Instantly"
          description="Step into the future of retail media with OptiSpiders—a platform designed for visionaries. Our advanced suite doesn’t just place ads; it intelligently bridges your products to high-intent shoppers, amplifying your brand at every digital touchpoint. From precision targeting to live, actionable insights and seamless brand elevation, OptiSpiders empowers you to own every moment on the digital shelf. Trusted by forward-thinking brands aiming for growth without limits."
          image={products1}
          link="#"
        />
      </div>

      {/*habib vai ai khane apnar section call korben  */} 

      <ServicePaidSearch
        title="Privacy-First Intelligence, Powered by OptiSpiders"
        description="OptiSpiders gives you the power to harness first-party data securely—no cookies, no compromises. In our privacy-first environment, your data stays protected while our closed-loop insights unlock powerful customer segments and campaign personalization. Confidently reach your audience, on your terms,  they shop."
        image={products3}
        link="#"
      />

      <RatailMediaNetwork
        title="Get Your Products Discovered, When It Matters Most"
        description="Search is where intent meets opportunity—and where OptiSpiders helps you win. With intelligent placement targeting and real-time performance analytics, you’ll always have the right product in the right spot, at the perfect moment. Unlock higher conversions, capture more share, and drive measurable growth with smarter paid search."
        buttonText="Learn More"
        buttonLink="/"
        imageSrc="/product/products4.png"
        imageAlt="Brand protection"
      />

      <ServicePaidSearch
        title="Build Campaigns at the Speed of Opportunity"
        description="Launch new orders, creative assets, and audience segments in a fraction of the time using OptiSpiders’ streamlined campaign builder. Our advanced automation tools remove manual busywork, enabling you to focus on optimizing ROAS, accelerating growth, and building your brand—smarter, faster, and more efficiently."
        image={product5}
        link="#"
      />

      

      <RetailShowcase
        items={itemsTwo}
        imageSrc={images.products6}
        reverse={true}
      />

      <TransformCommerce />
    </div>
  );
};

export default Page;
