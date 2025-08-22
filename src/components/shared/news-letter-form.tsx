"use client";
import { createNewsletter } from "@/actions/newsletter";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { newsletterSchema, NewsletterSchemaValue } from "@/schemas/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function NewsLetterForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<NewsletterSchemaValue>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: NewsletterSchemaValue) => {
    startTransition(() => {
      createNewsletter(values).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }
        // handle success
        toast.success(res.message);
        form.reset({
          email: "",
        });
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex mb-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Work Email"
                  className="rounded-l-sm rounded-r-none text-sm focus-visible:ring-[#2993D8] border-2 border-[#2993D8]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#2993D8] text-white px-6 py-2 rounded-r-md rounded-l-none text-sm font-medium transition-colors"
          disabled={isPending}
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
}
