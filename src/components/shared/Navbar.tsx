"use client";

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
import { images } from "@/constants/image";
import { cn } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { products, serviceGroups, services } from "../../../utils/Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

export function Navbar() {
  const column1 = products.slice(0, 5);
  const column2 = products.slice(5, 9);
  const column3 = products.slice(9, 13);

  return (
    <header className="w-full bg-white">
      <div className="container flex h-16 py-3 items-center justify-between">
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

            {/* products */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent className="justify-">
                <div className="grid w-[1000px] gap-6 p-6 md:grid-cols-3  min-w-[1000px] ">
                  {/* Column 1 */}
                  <div className="space-y-3 border border-gray/25 p-4 rounded-lg">
                    <Link
                      href={"/products/brands-and-shoppers-connect-instantly"}
                      className="flex items-center gap-2 text-lg font-semibold text-primary"
                    >
                      <span className="font-medium ">Page 1</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {column1.map((product) => (
                      <div
                        key={product.title}
                        className="flex items-start gap-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h1 className="font-light text-foreground">
                            {product.title}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-3 border border-primary/25 p-4 rounded-lg">
                    <Link
                      href={"/products/content-optimization"}
                      className="flex items-center gap-2 text-lg font-semibold text-primary"
                    >
                      <span className="font-medium ">Page 2</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {column2.map((product) => (
                      <div
                        key={product.title}
                        className="flex items-start gap-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h1 className="font-light text-foreground">
                            {product.title}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-3 border border-primary/25 p-4 rounded-lg">
                    <Link
                      href={"/products/retail-operation"}
                      className="flex items-center gap-2 text-lg font-semibold text-primary"
                    >
                      <span className="font-medium ">Page 3</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {column3.map((product) => (
                      <div
                        key={product.title}
                        className="flex items-start gap-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h1 className="font-light text-foreground">
                            {product.title}
                          </h1>
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
                            <li
                              key={service.title}
                              className="flex items-start gap-2 font-"
                            >
                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <div>
                                <h1 className="font-light text-foreground">
                                  {service.title}
                                </h1>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium flex items-center gap-2">
                  Resources <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-primary">
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="/about-us">About us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="/contact">Contact us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="/blogs">Blogs</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                      <h1
                        key={service.title}
                        className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                      >
                        {service.title}
                      </h1>
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
            <Button size="sm">
              <Link href="/contact" className="w-full">
                Contact Us
              </Link>
            </Button>
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
