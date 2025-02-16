import { z } from "zod";

export const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  mobile: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  position: z.string().optional(),
  skills: z.array(z.object({
    skill: z.string().optional(),
  })).optional(),
  personalImage: z.string().optional(),
  experiences: z.array(z.object({
    organization: z.string().optional(),
    role: z.string().optional(),
    duration: z.object({ from: z.date().optional(), to: z.date().optional() }).optional(),
    description: z.string().optional(),
  })).optional(),
})

export type FormSchema = z.infer<typeof formSchema>;