import React from 'react'
import Image from 'next/image'

interface Blog {
  id: number
  image: string
  date: string
  author: string
  title: string
  description: string
}

const blogs: Blog[] = [
  {
    id: 1,
    image: '/reuseable/demo-blog.png',
    date: 'Jun 21, 2025',
    author: 'Shohan',
    title: 'Where Brands and Shoppers Connect',
    description:
      'Step into the future of retail media with OptiSpiders—a platform designed for visionaries. Our advanced suite doesn’t just place ads; it intelligently bridges your products to high-intent shoppers, amplifying your brand at every digital touchpoint.',
  },
  {
    id: 2,
    image: '/reuseable/demo-blog.png',
    date: 'Jun 21, 2025',
    author: 'Shohan',
    title: 'Where Brands and Shoppers Connect',
    description:
      'From precision targeting to live, actionable insights and seamless brand elevation, OptiSpiders empowers you to own every moment on the digital shelf. Trusted by forward-thinking brands aiming for growth without limits.',
  },
  {
    id: 3,
    image: '/reuseable/demo-blog.png',
    date: 'Jun 21, 2025',
    author: 'Shohan',
    title: 'Where Brands and Shoppers Connect',
    description:
      'Our advanced suite doesn’t just place ads; it intelligently bridges your products to high-intent shoppers, amplifying your brand at every digital touchpoint.',
  },
  {
    id: 4,
    image: '/reuseable/demo-blog.png',
    date: 'Jun 21, 2025',
    author: 'Shohan',
    title: 'Where Brands and Shoppers Connect',
    description:
      'Step into the future of retail media with OptiSpiders—a platform designed for visionaries. Driving growth and maximizing ROI.',
  },
]

const BlogSection = () => {
  return (
    <section className=" container mx-auto py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h2 className="text-[12px] uppercase bg-sky-100 px-3 py-2 rounded-3xl inline-block text-[#2793D7] font-semibold">
          Our Blog
        </h2>
        <h2 className="text-3xl md:text-4xl text-[#063668] font-bold mt-2">
          Explore Our Blog
        </h2>
        <p className=" mt-4 text-[#2F2F2F] ">
          Comprehensive digital commerce solutions tailored to your business
          needs, driving growth and maximizing ROI.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full h-64 mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.author}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl text-[#063668] font-semibold mb-3">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-[#2F2F2F] text-sm leading-relaxed">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
