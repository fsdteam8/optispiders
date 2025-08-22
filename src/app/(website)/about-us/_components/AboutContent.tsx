import SectionBlock from './SectionBlock'

export default function AboutContent() {
  return (
    <div className="container py-[70px] md:py-[100px] lg:py-[120px] text-center">
      {/* Who We Are */}
      <SectionBlock
        tag="Our About us"
        title="Who We Are"
        description="OptiSpider is an AI-supported marketplace optimization firm dedicated to helping brands master their presence on Walmart, Amazon, and Target. Born from deep experience inside these marketplaces, our team combines former Amazon and Walmart insiders with data scientists and SEO specialists to deliver a uniquely powerful blend of technology and expertise."
      />

      {/* Our Mission */}
      <SectionBlock
        tag="Our Mission"
        title="To empower every e-commerce seller"
        description="Whether you're launching your first SKU or managing thousands, we give you the tools, insights, and strategies to stand out—fast. We automate the tedious, data-driven tasks (keyword research, content scoring, performance tracking) so you can focus on what matters: growing your brand."
      />

      {/* Our Values */}
      <SectionBlock
        tag="Our Values"
        title="Our Values"
        list={[
          {
            label: 'Innovation',
            text: 'We continuously explore the latest AI and automation technologies to keep you steps ahead of the competition.',
          },
          {
            label: 'Transparency',
            text: 'Clear reporting, honest recommendations, and open communication—no black-box SEO tricks.',
          },
          {
            label: 'Partnership',
            text: 'Your success is our success. We work side-by-side with your team, as an extension of your business.',
          },
          {
            label: 'Results-Driven',
            text: 'Every recommendation, every optimization, every report is focused on one thing: measurable lift in visibility, traffic, and sales.',
          },
        ]}
      />
      {/* our story section */}
      <div className="max-w-[642px] container mx-auto">
        <h2 className="text-[#063668] text-[32px] font-semibold leading-[120%] ">
          Our story
        </h2>
        <p className="text-[#2F2F2F] font-normal leading-[150%] ">
          Born from firsthand experience across our entire team—where manual
          listing updates dragged on for days and one-size-fits-all SEO tools
          failed to grasp true marketplace nuances—OptiSpiders set out to
          redefine e-commerce optimization. In early 2024, our collective of
          former marketplace engineers and data scientists came together to
          build a platform perfectly tuned to Walmart, Amazon, and Target.
          Today, OptiSpiders empowers dozens of brands by automating audits,
          bulk content updates, and performance reporting—helping them capture
          more search share and achieve measurable sales growth.
        </p>
      </div>
    </div>
  )
}
