import React from 'react'
import { BlogBanner } from './_components/BlogBanner'
import BlogSection from './_components/blogSection'
import TransformCommerce from '@/components/shared/TransformCommerce'

const Page = () => {
  return (
    <div>
      <BlogBanner />
      <BlogSection />
      <TransformCommerce />
    </div>
  )
}

export default Page
