import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
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

      <CardContent>df</CardContent>
    </Card>
  );
};

export default Page;
