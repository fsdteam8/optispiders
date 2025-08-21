import ContactForm from "./_components/contact-form";

const Page = () => {
  return (
    <div className="container pb-[100px]">
      <div className="mx-auto text-center py-[100px]">
        <h1 className="text-primary font-semibold text-[22px] md:text-[30px]">
          Get Started with OptiSpiders
        </h1>
        <p className="text-[14px] md:text-base">
          Tell us about your business needs and we&apos;ll create a tailored
          solution to help you achieve your e-commerce goals.
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Page;
