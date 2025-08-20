import React from "react";

const TermsOfService = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-[32px] text-[#063668] text-center font-bold mb-10 mt-[88px]">
          Terms of Service
        </h2>
        {/* Introduction */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-5">
            Introduction
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span className=" text-[#2F2F2F">
              This website (the “Website”
              ) is operated by OptiSpider LLC, a
              Wyoming limited liability (“OptiSpider,” “we,” “us,” or “our”).
            </span>
            <span>
              Please read these Terms & Conditions (“Terms”) carefully before
              using the Website. By accessing or using any part of the Website,
              you (“you” or “User”) agree to be bound by these Terms. If you do
              not agree to all of these Terms, you must immediately stop using
              the Website.
            </span>
            <span>
              OptiSpider may revise these Terms at any time by posting an
              updated version on the Website. Your continued use after any such
              change constitutes acceptance of the new Terms. You should
              therefore review these Terms regularly.
            </span>
          </div>
        </div>
        {/* disclaimer */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Disclaimer
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              While OptiSpider strives to keep the Website available 24/7, we
              make no guarantee it will be uninterrupted or error-free.
              OptiSpider is not liable for any temporary suspension of access
              due to maintenance, technical issues, or other causes beyond our
              control.
            </span>
            <span>
              All content on the Website, including text, graphics, and
              third-party materials (the “Materials”), is provided for general
              information only. It does not constitute professional advice or a
              recommendation tailored to your specific situation. You should
              seek appropriate professional advice before making any business
              decisions.
            </span>
          </div>
        </div>
        {/* use of website content  */}
        <div className="my-10">
          <h2 className="text-[18px] text-[#063668] font-semibold mb-[24px]">
            Use of Website Content
          </h2>
          {/* Intellectual Property */}
          <div className="ml-6">
            <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
              Intellectual Property
            </h3>
            <div className="text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] ">
              <span>
                All Materials, including trademarks, service marks, trade names,
                logos, and copyrighted content, are the property of OptiSpider
                or our licensors.
              </span>
            </div>
          </div>
          <div className="my-10 ml-6">
            <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
              Permitted Use
            </h3>
            <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
              <span>
                You may view and print one copy of any page on the Website for
                your personal, non-commercial use only. You may not otherwise
                copy, reproduce, distribute, modify, or create derivative works
                of any Materials without our prior written consent.
              </span>
            </div>
          </div>
          <div className=" ml-6">
            <h3 className="text-[18px] mb-2 text-[#063668] font-semibold ">
              Prohibited Conduct
            </h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-8 font-normal text-[#2F2F2F] text-xs md:text-[16px] flex flex-col gap-1 ">
              <li>Harvest or scrape content or data from the Website;</li>
              <li>
                Reverse-engineer, decompile, or otherwise attempt to extract
                source code or data;
              </li>
              <li>
                Frame, mirror, or otherwise incorporate any part of the Website
                into another site;
              </li>
              <li>
                Use the Website or Materials for any unlawful or unauthorized
                purpose;
              </li>
              <li>
                Post or transmit any material that is defamatory, obscene,
                threatening, infringing, or that otherwise violates any party’s
                rights.
              </li>
            </ul>
          </div>
        </div>
        {/* Use of Software */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Use of Software
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] ">
            <span>
              Any software made available for download from the Website is
              licensed to you under the terms of the accompanying End User
              License Agreement (“EULA”). Do not install or use such software if
              you do not agree to its EULA.
            </span>
          </div>
        </div>
        {/* User-Generated Content*/}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            User-Generated Content
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] ">
            <span>
              Where the Website allows you to post comments, reviews, or other
              content (“User Content”), you grant OptiSpider a perpetual,
              irrevocable, royalty-free, worldwide license to use, reproduce,
              modify, and publish that content. You represent and warrant that
              you own all rights to your User Content and that its posting does
              not violate any third-party rights or applicable law. OptiSpider
              may remove any User Content at our discretion.
            </span>
          </div>
        </div>
        {/* Links to and from Other Websites  */}
        <div className="my-10">
          <div>
            <h3 className="text-[18px] mb-2 text-[#063668] font-semibold ">
              Links to and from Other Websites{" "}
            </h3>
            <p className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] ">
              Links to third-party websites are provided for convenience only.
              OptiSpider does not endorse or control those sites and is not
              responsible for their content or availability. If you link to the
              Website, you must:
            </p>
            <ul className="list-disc pl-8 font-normal text-[#2F2F2F] text-xs md:text-[16px] flex flex-col gap-1 ">
              <li>Link only to the home page at https://optispider.com;</li>
              <li>Not suggest any sponsorship or endorsement by OptiSpider;</li>
              <li>Immediately remove the link upon our request.</li>
            </ul>
          </div>
        </div>

        {/* Registration */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Registration
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              “All OptiSpider trademarks, service marks, logos, and trade names
              (collectively, the “OptiSpider Marks”) are owned exclusively by
              OptiSpider. You may use the OptiSpider Marks only with our prior
              written permission and in accordance with any usage guidelines we
              provide.”
            </span>
          </div>
        </div>

        {/* Termination & Indemnity */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Termination & Indemnity
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              OptiSpider may suspend or terminate your access at any time for
              violation of these Terms. You agree to indemnify and hold
              OptiSpider harmless from any claims, losses, liabilities, damages,
              costs, or expenses (including attorneys’ fees) arising from your
              use of the Website or violation of these Terms.”
            </span>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Limitation of Liability
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              To the fullest extent permitted by law, OptiSpider’s total
              liability to you for any claim arising from your use of the
              Website (whether in contract, tort, or otherwise) shall not exceed
              USD 500. OptiSpider is not liable for any indirect, incidental,
              special, or consequential damages.
            </span>
          </div>
        </div>

        {/*  Privacy & Cookies */}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Privacy & Cookies
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              Our Privacy Policy explain how we collect, use, and protect your
              information. By using the Website, you consent to those policies.
            </span>
          </div>
        </div>

        {/* General*/}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            General
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              If any provision of these Terms is held invalid, the remaining
              provisions shall remain in full force and effect. These Terms are
              governed by the laws of the State of Texas, U.S.A., and any
              dispute shall be resolved exclusively in the state or federal
              courts in Travis County, Texas.
            </span>
          </div>
        </div>

        {/* contact us*/}
        <div className="my-10">
          <h3 className="text-[18px] text-[#063668] font-semibold mb-2">
            Contact Us
          </h3>
          <div className="text-xs md:text-[16px] font-normal mb-4 leading-[150%] text-[#2F2F2F] flex flex-col gap-5">
            <span>
              If any provision of these Terms is held invalid, the remaining
              provisions shall remain in full force and effect. These Terms are
              governed by the laws of the State of Texas, U.S.A., and any
              dispute shall be resolved exclusively in the state or federal
              courts in Travis County, Texas.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
