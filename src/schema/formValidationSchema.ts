import { z } from "zod";

const experiencesSchema = z.object({
  organization: z.string().optional(),
  role: z.string().optional(),
  duration: z.object({ from: z.date().optional(), to: z.date().optional() }).optional(),
  description: z.string().optional(),
})

const projectsSchema = z.object({
  title: z.string().optional(),
  link: z.string().optional(),
  description: z.string().optional(),
})

const educationsSchema = z.object({
  college: z.string().optional(),
  year: z.object({ from: z.date().optional(), to: z.date().optional() }).optional(),
  qualification: z.string().optional(),
  description: z.string().optional(),
})


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
    value: z.string().optional(),
  })).optional(),
  personalImage: z.string().optional(),
  experiences: z.array(experiencesSchema),
  projects: z.array(projectsSchema),
  educations: z.array(educationsSchema),
  languages: z.array(z.object({ value: z.string() })).optional(),
  achievements: z.array(z.object({ value: z.string() })).optional(),
  certificates: z.array(z.object({ value: z.string() })).optional(),

})

export type FormSchema = z.infer<typeof formSchema>;