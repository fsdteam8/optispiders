import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import ContactManagementContainer from "./_components/contact-management-container";

const Page = async () => {
  const data =
    (await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc", // latest first
      },
    })) ?? [];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Contact Management</CardTitle>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Contact Management</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CardHeader>

      <CardContent>
        <ContactManagementContainer data={data} />
      </CardContent>
    </Card>
  );
};

export default Page;
