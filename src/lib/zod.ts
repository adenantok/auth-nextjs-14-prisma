import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(3, "Name must be more than 3 character"),
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be less than 32 character"),
  ConfirmPassword: string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be less than 32 character"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"],
});
