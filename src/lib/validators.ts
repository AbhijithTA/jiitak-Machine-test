import { z } from "zod";

export const emailSchema = z.string().email();
export const passwordSchema = z.string()
  .min(8).max(20)
  .regex(/[a-z]/, "lower").regex(/[A-Z]/, "upper").regex(/\d/, "digit");
