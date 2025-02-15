import { z } from "zod";

export const formSchema = z.object({
  name: z.string().nonempty("name is required"),
  email: z.string().email("email not matches"),
  mobile: z.string().min(11, "mobile like 07777777777").max(11, "mobile like 07777777777"),
  country: z.string().nonempty("country is required"),
  city: z.string().optional(),
  street: z.string().optional(),
  linkedin: z.string().url("url not matches"),
  github: z.string().url("url not matches"),
  position: z.string().nonempty("position is required"),
  skills: z.array(z.string()).min(1, "skills is required"),
  personalImage: z.string().optional(),
})

export type FormSchema = z.infer<typeof formSchema>;