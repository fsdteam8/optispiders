"use client";
import { leadCollectAction } from "@/actions/lead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LocationSelector from "@/components/ui/location-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { leadFormSchema, LeadFormValues } from "@/schemas/lead";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const retailers = [
  { id: "amazon", label: "Amazon" },
  { id: "walmart", label: "Walmart" },
  { id: "instacart", label: "Instacart" },
  { id: "target", label: "Target" },
  { id: "kroger", label: "Kroger" },
  { id: "tiktok-shop", label: "TikTok Shop" },
  { id: "others", label: "Others" },
] as const;

export default function ContactForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCountryName] = useState<string>("");
  const [stateName, setStateName] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      retailers: [],
      terms: false,
    },
  });

  function onSubmit(values: LeadFormValues) {
    startTransition(() => {
      leadCollectAction(values).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }

        // handle success
        toast.success(res.message);
        form.reset();
      });
    });
  }

  return (
    <Card className="w-fit mx-auto shadow-none">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Work email" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl className="w-full">
                        <PhoneInput
                          placeholder=""
                          {...field}
                          defaultCountry="TR"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <LocationSelector
                      onCountryChange={(country) => {
                        setCountryName(country?.name || "");
                        form.setValue(field.name, [
                          country?.name || "",
                          stateName || "",
                        ]);
                      }}
                      onStateChange={(state) => {
                        setStateName(state?.name || "");
                        form.setValue(field.name, [
                          form.getValues(field.name)[0] || "",
                          state?.name || "",
                        ]);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="retailers"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base font-medium">
                      Which retailer(s) do you sell through:
                    </FormLabel>
                  </div>

                  <div className="space-y-3">
                    {retailers.map((retailer) => {
                      const checked = field.value?.includes(retailer.id);

                      return (
                        <FormItem
                          key={retailer.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(isChecked) => {
                                if (isChecked) {
                                  field.onChange([
                                    ...(field.value ?? []),
                                    retailer.id,
                                  ]);
                                } else {
                                  field.onChange(
                                    field.value?.filter(
                                      (val) => val !== retailer.id
                                    ) ?? []
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            {retailer.label}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border-0 p-0">
                  <FormControl>
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      By submitting this form you agree to our terms and
                      conditions and privacy policy as well as to receive
                      marketing emails from Optispider. You can unsubscribe from
                      these communications at any time.
                    </FormLabel>

                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                Submit Request{" "}
                {isPending && <Loader2 className="animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
