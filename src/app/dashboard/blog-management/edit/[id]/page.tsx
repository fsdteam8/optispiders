import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogCreateForm from "../../create/_components/blog-create-form";

const Page = async ({ params }: { params: { id: string } }) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!blog) notFound();
  return (
    <div>
      <BlogCreateForm initialData={blog} />
    </div>
  );
};

export default Page;
