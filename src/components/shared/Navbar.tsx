"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { images } from "@/constants/image";

const products = [
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
];

const services = [
  {
    title: "Paid Search",
    href: "/services/paid-search",
    description: "Professional paid search management",
  },
  {
    title: "Retail Media Network",
    href: "/services/retail-media-network",
    description: "Comprehensive retail media network solutions",
  },
  {
    title: "Optimization Metrics",
    href: "/services/optimization-metrics",
    description: "Advanced optimization and performance metrics",
  },
  {
    title: "Retail Excellence",
    href: "/services/retail-excellence",
    description: "Achieve retail excellence with our expertise",
  },
  {
    title: "Brand Protection",
    href: "/services/brand-protection",
    description: "Protect your brand across all channels",
  },
  {
    title: "Fee Recovery",
    href: "/services/fee-recovery",
    description: "Recover fees and optimize costs",
  },
  {
    title: "Product Page Content",
    href: "/services/product-page-content",
    description: "Optimize product page content for conversions",
  },
  {
    title: "Retailer Brand Stores",
    href: "/services/retailer-brand-stores",
    description: "Build and manage retailer brand stores",
  },
  {
    title: "Advertising Creative",
    href: "/services/advertising-creative",
    description: "Creative advertising solutions and design",
  },
  {
    title: "Content Syndication Support",
    href: "/services/content-syndication",
    description: "Support for content syndication across platforms",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 py-2 items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <div className="hidden lg:block">
            <Image
              src={images.logo}
              alt="logo.png"
              width={1000}
              height={1000}
              className="h-16 w-24"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex text-primary">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-3 p-4 md:grid-cols-3">
                  {products.map((product) => (
                    <ListItem
                      key={product.title}
                      title={product.title}
                      href={product.href}
                    >
                      {product.description}
                    </ListItem>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-3 p-4 md:grid-cols-3">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 text-primary">
            <SheetHeader>
              <SheetTitle>
                <Link href={"/"}>
                  <div className=" lg:hidden">
                    <Image
                      src={images.logo}
                      alt="logo.png"
                      width={1000}
                      height={1000}
                      className="h-16 w-24"
                    />
                  </div>
                </Link>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground text-primary"
                >
                  Home
                </Link>
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Products</h4>
                  <div className="ml-4 flex flex-col space-y-2">
                    {products.slice(0, 6).map((product) => (
                      <Link
                        key={product.title}
                        href={product.href}
                        className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Services</h4>
                  <div className="ml-4 flex flex-col space-y-2">
                    {services.slice(0, 6).map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile Logo */}
        <div className="flex items-center justify-between space-x-2 flex-1 md:flex-none md:justify-end">
          <Link href={"/"}>
            <div className="lg:hidden">
              <Image
                src={images.logo}
                alt="logo.png"
                width={1000}
                height={1000}
                className="h-16 w-24"
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border border-primary text-primary"
            >
              Sign In
            </Button>
            <Button size="sm">Contact Us</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
