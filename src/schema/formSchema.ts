import { z } from "zod";

export const formSchema = z.object({
})

export type FormSchema = z.infer<typeof formSchema>;