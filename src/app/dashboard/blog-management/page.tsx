import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import BlogManagementContainer from "./_components/blog-management-container";

const Page = async () => {
  const data = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <Card>
      <CardHeader>
        <section className="flex items-center justify-between">
          <div>
            <CardTitle className="text-primary">Blog Management</CardTitle>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>Blog Management</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Button asChild>
            <Link href="/dashboard/blog-management/create">Add New Blog</Link>
          </Button>
        </section>
      </CardHeader>

      <CardContent>
        <BlogManagementContainer data={data} />
      </CardContent>
    </Card>
  );
};

export default Page;
