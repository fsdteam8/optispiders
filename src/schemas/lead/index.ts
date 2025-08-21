import { z } from "zod";

export const leadFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1),
  phone: z.string(),
  companyName: z.string().min(1),
  jobTitle: z.string().min(1),

  // Country can be empty initially (for reset), but validated on submit
  country: z
    .tuple([z.string().optional(), z.string().optional()])
    .refine((val) => val[0] && val[0].trim().length > 0, {
      message: "Please select a country",
    }),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),

  retailers: z
    .array(z.string())
    .min(1, "Please select at least one retailer")
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one retailer.",
    }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
