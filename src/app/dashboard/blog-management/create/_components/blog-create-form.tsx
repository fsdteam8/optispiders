"use client";
import { createBlogAction, editBlogAction } from "@/actions/blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUploader } from "@/components/ui/file-upload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogSchema, BlogSchemaValue } from "@/schemas/blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Blog } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  initialData?: Blog;
}

export default function BlogCreateForm({ initialData }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<BlogSchemaValue>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: initialData?.title ?? "",
      author: initialData?.author ?? "",
      content: initialData?.content ?? "",
      thumbnail: initialData?.thumbnail ?? "",
    },
  });

  async function onSubmit(values: BlogSchemaValue) {
    if (initialData) {
      startTransition(() => {
        editBlogAction(initialData.id, values).then((res) => {
          if (!res.success) {
            toast.error(res.message);
            return;
          }

          // handle success
          toast.success(res.message);
          form.reset({
            title: "",
            content: "",
            author: "",
            thumbnail: "",
          });
          router.back();
        });
      });
    } else {
      startTransition(() => {
        createBlogAction(values).then((res) => {
          if (!res.success) {
            toast.error(res.message);
            return;
          }

          // handle success
          toast.success(res.message);
          form.reset({
            title: "",
            content: "",
            author: "",
            thumbnail: "",
          });
        });
      });
    }
  }

  return (
    <Card className="bg-white">
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
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    {initialData ? "Edit" : "Create"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            Back
          </Button>
        </section>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  mr-auto py-10"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Add your title"
                          type=""
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Write author name"
                          type=""
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onChange={field.onChange}
                        onUploadStateChange={() => {}}
                        id="banner"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-end">
              <Button type="submit" disabled={isPending}>
                {initialData ? "Save" : "Publish"} Blog{" "}
                {isPending && <Loader2 className="animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
