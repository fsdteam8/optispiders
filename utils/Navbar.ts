export const services = [
  {
    title: "Paid Search",
    description: "Professional paid search management",
  },
  {
    title: "Retail Media Network",
    description: "Comprehensive retail media network solutions",
  },
  {
    title: "Optimization Metrics",
    description: "Advanced optimization and performance metrics",
  },
  {
    title: "Retail Excellence",
    description: "Achieve retail excellence with our expertise",
  },
  {
    title: "Brand Protection",
    description: "Protect your brand across all channels",
  },
  {
    title: "Fee Recovery",
    description: "Recover fees and optimize costs",
  },
  {
    title: "Product Page Content",
    description: "Optimize product page content for conversions",
  },
  {
    title: "Retailer Brand Stores",
    description: "Build and manage retailer brand stores",
  },
  {
    title: "Advertising Creative",
    description: "Creative advertising solutions and design",
  },
  {
    title: "Content Syndication Support",
    description: "Support for content syndication across platforms",
  },
];

export const serviceGroups = [
  {
    href: "/services/managed-media",
    title: "Managed media",
    services: services.filter((service) =>
      ["Paid Search", "Retail Media Network", "Optimization Metrics"].includes(service.title),
    ),
  },
  {
    href: "/services/retail-excellence",
    title: "Retail Excellence",
    services: services.filter((service) =>
      ["Retail Excellence", "Brand Protection", "Fee Recovery"].includes(service.title),
    ),
  },
  {
    href: "/services/produce-content-and-creative",
    title: "Produce content & creative",
    services: services.filter((service) =>
      ["Product Page Content", "Retailer Brand Stores", "Advertising Creative", "Content Syndication Support"].includes(
        service.title,
      ),
    ),
  },
]

export const products = [
  {
    title: "Retail Media",
    href: "/products/retail-media",
    description: "Advanced retail media solutions for your business",
  },
  {
    title: "Media Automation",
    href: "/products/media-automation",
    description: "Automated media management and optimization",
  },
  {
    title: "Data Protection",
    href: "/products/data-protection",
    description: "Comprehensive data security and privacy solutions",
  },
  {
    title: "Product Placement",
    href: "/products/product-placement",
    description: "Strategic product positioning and placement",
  },
  {
    title: "Campaign Accelerator",
    href: "/products/campaign-accelerator",
    description: "Boost your marketing campaigns with AI",
  },
  {
    title: "Content Optimization",
    href: "/products/content-optimization",
    description: "Optimize your content for maximum impact",
  },
  {
    title: "Rich Media",
    href: "/products/rich-media",
    description: "Create engaging rich media experiences",
  },
  {
    title: "Smart Classification",
    href: "/products/smart-classification",
    description: "AI-powered content classification",
  },
  {
    title: "Insights Engine",
    href: "/products/insights-engine",
    description: "Deep analytics and business insights",
  },
  {
    title: "Market Intelligence",
    href: "/products/market-intelligence",
    description: "Comprehensive market analysis and trends",
  },
  {
    title: "Market Share",
    href: "/products/market-share",
    description: "Track and analyze market share data",
  },
  {
    title: "Retail Insights",
    href: "/products/retail-insights",
    description: "Advanced retail analytics and insights",
  },
  {
    title: "Digital Shelf",
    href: "/products/digital-shelf",
    description: "Optimize your digital shelf presence",
  },
]