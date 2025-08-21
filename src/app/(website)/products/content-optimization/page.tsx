import Hero from "@/components/home/Hero";
import ServicePaidSearch from "@/components/shared/ServicePaidSearch";
import productsPage1 from "../../../../../public/product/productPage2_1.png";
import productsPage3 from "../../../../../public/product/productPage2_3.png";
import RatailMediaNetwork from "@/components/shared/RatailMediaNetwork";
import ReadyToTransform from "@/components/shared/ReadyToTransform";
import VisibilityIntelligence from "@/components/visibiliyIntelligence/VisibilityIntelligence";

const Page = () => {
  return (
    <div>
      <Hero isStatsShow={false} />

      <div className="mt-20">
        <ServicePaidSearch
          title="Content Optimization"
          description={`Save time and boost conversions with intelligent, AI-driven content recommendations. <br /> <br />  Our proprietary dataset fuels OptiSpiders generative AI to analyze and optimize your product listings — improving titles, descriptions, and bullet points to elevate search performance and drive more sales.<br /> <br /> Stop spending hours reviewing product content manually. Let OptiSpiders streamline the process with smart automation designed to maximize your retail success.`}
          image={productsPage1}
          link="#"
        />
      </div>

      <RatailMediaNetwork
        title="Win the Digital Shelf with OptiSpiders Rich Media"
        description="Basic product pages don’t sell — experiences do. OptiSpiders transforms your Walmart listings with high-converting rich media: videos, 360° imagery, comparison modules, and interactive carousels that drive engagement and boost sales.<br /> <br /> Our platform makes it easy to launch enhanced content at scale — no coding, no bottlenecks. Plus, every asset is Walmart-optimized to improve your Content Quality Score and outrank the competition.<br /> <br /> Don’t just list products — tell stories, earn clicks, and convert faster. Partner with OptiSpiders to turn browsers into buyers."
        buttonText="Learn More"
        buttonLink="/"
        imageSrc="/product/productPage2_2.png"
        imageAlt="Brand protection"
      />

      <ServicePaidSearch
        title="Smart Product Classification Drive actionable insights through automation"
        description={`1. Speed & Scalability:. <br /> <br />  Leverage intelligent rule-based automation to classify thousands of SKUs in minutes. Free up your team from repetitive tasks and focus on strategic actions that move the needle.<br /> <br /> 2.Accuracy & Consistency:  <br /> <br /> Eliminate manual errors and ensure uniform product tagging across your entire catalog. Our system highlights conflicting or overlapping rules to preserve data integrity across your hierarchy.`}
        image={productsPage3}
        link="#"
      />

      <VisibilityIntelligence />


      <ReadyToTransform />
    </div>
  );
};

export default Page;
