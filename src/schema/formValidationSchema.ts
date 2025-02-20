import { z } from "zod";

export const experiencesSchema = z.object({
  organization: z.string().optional(),
  role: z.string().optional(),
  duration: z.object({ from: z.date().optional(), to: z.date().optional() }).optional(),
  description: z.string().optional(),
})

export const projectsSchema = z.object({
  title: z.string().optional(),
  link: z.string().optional(),
  description: z.string().optional(),
})

export const educationsSchema = z.object({
  college: z.string().optional(),
  year: z.object({ from: z.date().optional(), to: z.date().optional() }).optional(),
  qualification: z.string().optional(),
  description: z.string().optional(),
})


export const formSchema = z.object({
  name: z.string().nonempty("name is required"),
  email: z.string().email("email doesn't matches").nonempty("email is required"),
  mobile: z.string().nonempty("mobile is required").min(11, "like 07700000000").max(11, "like 07700000000"),
  country: z.string().nonempty("country is required"),
  city: z.string().nonempty("city is required"),
  street: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  position: z.string().nonempty("position is required"),
  skills: z.array(z.object({
    value: z.string().optional(),
  })).optional(),
  personalImage: z.string().optional(),
  experiences: z.array(experiencesSchema),
  projects: z.array(projectsSchema),
  educations: z.array(educationsSchema),
  languages: z.array(z.object({ value: z.string() })).optional(),
  achievements: z.array(z.object({ value: z.string() })).optional(),
  certificates: z.array(z.object({ value: z.string() })).optional(),
  color: z.string().optional(),
})

export type FormSchema = z.infer<typeof formSchema>;