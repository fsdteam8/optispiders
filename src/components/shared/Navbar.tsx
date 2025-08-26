'use client'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { images } from '@/constants/image'
import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { products, serviceGroups } from '../../../utils/Navbar'
import slugify from '@/lib/slugify'

export function Navbar() {
  const column1 = products.slice(0, 5)
  const column2 = products.slice(5, 9)
  const column3 = products.slice(9, 13)

  const [productsOpen, setProductsOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)

  const parent1 = '/products/brands-and-shoppers-connect-instantly'
  const parent2 = '/products/content-optimization'
  const parent3 = '/products/retail-operation'

  return (
    <header className="w-full bg-white">
      <div className="container flex h-[80px] py-3 items-center justify-between">
        {/* Logo */}
        <Link href={'/'}>
<Image
  src={images.logo || '/placeholder.svg'}
  alt="Logo"
  width={260}   // use bigger intrinsic width
  height={160}  // adjust proportionally
  className="w-[130px] h-auto" 
  priority
  unoptimized
/>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 text-primary">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="justify-">
                  <div className="grid w-[1000px] gap-6 p-6 md:grid-cols-3  min-w-[1000px] ">
                    {/* Column 1 */}
                    <div className="space-y-3 border border-gray/25 p-4 rounded-lg">
                      <Link
                        href={'/products/brands-and-shoppers-connect-instantly'}
                        className="flex items-center gap-2 text-lg font-semibold text-primary"
                      >
                        <span className="font-medium ">Retail Media</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {column1.map((product) => (
                        <div
                          key={product.title}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <Link
                              scroll={true}
                              href={`${parent1}#${slugify(product.title)}`}
                            >
                              <h1 className="font-light text-foreground">
                                {product.title}
                              </h1>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3 border border-primary/25 p-4 rounded-lg">
                      <Link
                        href={'/products/content-optimization'}
                        className="flex items-center gap-2 text-lg font-semibold text-primary"
                      >
                        <span className="font-medium ">Content Power</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {column2.map((product) => (
                        <div
                          key={product.title}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <Link
                              scroll={true}
                              href={`${parent2}#${slugify(product.title)}`}
                            >
                              <h1 className="font-light text-foreground">
                                {product.title}
                              </h1>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-3 border border-primary/25 p-4 rounded-lg">
                      <Link
                        href={'/products/retail-operation'}
                        className="flex items-center gap-2 text-lg font-semibold text-primary"
                      >
                        <span className="font-medium ">
                          Market Intelligence
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {column3.map((product) => (
                        <div
                          key={product.title}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <Link
                              scroll={true}
                              href={`${parent3}#${slugify(product.title)}`}
                            >
                              <h1 className="font-light text-foreground">
                                {product.title}
                              </h1>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-full min-w-[1000px] p-6">
                    <div className="grid grid-cols-3 gap-5">
                      {serviceGroups.map((group) => (
                        <div
                          key={group.title}
                          className="space-y-4 border border-gray/25 p-4 rounded-lg w-auto"
                        >
                          <Link
                            href={group.href}
                            className="flex items-center gap-2 text-lg font-semibold text-primary"
                          >
                            <span className="font-medium ">{group.title}</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                          <ul className="space-y-3">
                            {group.services.map((service) => (
                              <Link
                                key={service.title}
                                scroll={true}
                                href={`${group.href}#${slugify(service.title)}`}
                                className="block text-xs text-foreground/70 hover:text-foreground ml-2"
                              >
                                • {service.title}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about-us"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            About us
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/contact-us"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Contact us
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/blogs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Blogs
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
          <SheetContent side="left" className="pr-0 text-primary w-[350px]">
            <SheetHeader>
              <SheetTitle>
                <Link href={'/'}>
                  <div className=" lg:hidden">
                    <Image
                      src={images.logo || '/placeholder.svg'}
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
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground text-primary font-medium"
                >
                  Home
                </Link>

                <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-start w-full text-left font-medium hover:text-foreground">
                    Products
                    <ChevronDown
                      className={`h-4 w-4 ml-[45px] transition-transform ${
                        productsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-3">
                    <div className="ml-4 space-y-4">
                      <div className="space-y-2">
                        <Link
                          href="/products/brands-and-shoppers-connect-instantly"
                          className="text-sm font-medium text-primary flex items-center gap-1"
                        >
                          Retail Media <ArrowRight className="h-3 w-3" />
                        </Link>
                        {column1.map((product) => (
                          <Link
                            key={product.title}
                            href={product.href}
                            className="block text-xs text-foreground/70 hover:text-foreground ml-2"
                          >
                            • {product.title}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <Link
                          href="/products/content-optimization"
                          className="text-sm font-medium text-primary flex items-center gap-1"
                        >
                          Content Power <ArrowRight className="h-3 w-3" />
                        </Link>
                        {column2.map((product) => (
                          <Link
                            key={product.title}
                            href={product.href}
                            className="block text-xs text-foreground/70 hover:text-foreground ml-2"
                          >
                            • {product.title}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <Link
                          href="/products/retail-operation"
                          className="text-sm font-medium text-primary flex items-center gap-1"
                        >
                          Market Intelligence <ArrowRight className="h-3 w-3" />
                        </Link>
                        {column3.map((product) => (
                          <Link
                            key={product.title}
                            href={product.href}
                            className="block text-xs text-foreground/70 hover:text-foreground ml-2"
                          >
                            • {product.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-start w-full text-left font-medium hover:text-foreground">
                    Services
                    <ChevronDown
                      className={`h-4 w-4 ml-[46px] transition-transform ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-3">
                    <div className="ml-4 space-y-4">
                      {serviceGroups.map((group) => (
                        <div key={group.title} className="space-y-2">
                          <Link
                            href={group.href}
                            className="text-sm font-medium text-primary flex items-center gap-1"
                          >
                            {group.title} <ArrowRight className="h-3 w-3" />
                          </Link>
                          {group.services.map((service) => (
                            <div
                              key={service.title}
                              className="text-xs text-foreground/70 ml-2"
                            >
                              • {service.title}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={resourcesOpen}
                  onOpenChange={setResourcesOpen}
                >
                  <CollapsibleTrigger className="flex items-center justify-start w-full text-left font-medium hover:text-foreground">
                    Resources
                    <ChevronDown
                      className={`h-4 w-4 ml-[33px] transition-transform ${
                        resourcesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    <div className="ml-4 space-y-2">
                      <Link
                        href="/about-us"
                        className="block text-sm text-foreground/70 hover:text-foreground"
                      >
                        About us
                      </Link>
                      <Link
                        href="/contact-us"
                        className="block text-sm text-foreground/70 hover:text-foreground"
                      >
                        Contact us
                      </Link>
                      <Link
                        href="/blogs"
                        className="block text-sm text-foreground/70 hover:text-foreground"
                      >
                        Blogs
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Link href="login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-primary text-primary bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button size="sm">Contact Us</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile Logo */}
        <div className="flex items-center justify-between space-x-2 flex-1 md:flex-none md:justify-end">
          <Link href={'/'}>
            <div className="lg:hidden">
              <Image
                src={images.logo || '/placeholder.svg'}
                alt="logo.png"
                width={1000}
                height={1000}
                className="h-16 w-24"
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-2">
            <Link href="login">
              <Button
                variant="outline"
                size="sm"
                className="border border-primary text-primary bg-transparent"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="sm">Contact Us</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
