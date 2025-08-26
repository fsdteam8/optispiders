import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo/logo.png'
import NewsLetterForm from './news-letter-form'

const quickLinks = [
  { name: 'Products', href: '/products/brands-and-shoppers-connect-instantly' },
  { name: 'Services', href: '/services/managed-media' },
  // { name: 'Case Studies', href: '/case-studies' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
]

const servicesLinks = [
  { name: 'Managed Media', href: '/services/managed-media' },
  {
    name: 'Retail Media Network',
    href: '/services/managed-media#retail-media-network',
  },
  {
    name: 'Brand Protection',
    href: '/services/retail-excellence#brand-protection',
  },
  { name: 'Fee Recovery', href: '/services/retail-excellence#fee-recovery' },
  {
    name: 'Content Syndication Support   ',
    href: '/services/produce-content-and-creative#content-syndication-support',
  },
]

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Left Section - Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Opti Spiders Logo" />
            </div>

            <p className="text-base text-[#707070] mb-5">
              Commerce Collective Newsletter
            </p>

            <NewsLetterForm />

            <p className="text-[14px] md:text-base text-[#707070] ">
              By signing up you agree to the terms of our Privacy Policy and to
              receive electronic communications from Flywheel.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex justify-start md:justify-center lg:justify-end mb-8 md:mb-0">
            <div className="flex flex-col md:items-center lg:items-start">
              <h3 className="text-xl font-medium text-[#707070] mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-start md:text-center lg:text-start">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-base text-[#707070]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex justify-start md:justify-center lg:justify-end">
            <div className="flex flex-col md:items-center lg:items-start">
              <h3 className="text-xl font-medium text-[#707070] mb-5">
                Services
              </h3>
              <ul className="space-y-3 text-start md:text-center lg:text-start">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-base text-[#707070]"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 border-t border-[#D9D9D94D] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-[#707070]">
            © 2025 Opti Spiders. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-[#707070]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-[#707070]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
