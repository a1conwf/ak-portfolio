import { z } from "zod";

export const emailSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Please enter a message" }),
});

export type emailSchemaValues = z.infer<typeof emailSchema>;
