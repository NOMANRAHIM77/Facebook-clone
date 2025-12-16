import { z } from "zod";

 const SignupSchemas = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "Max 20 characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Max 20 characters"),

  birthdayMonth: z.string().min(1, "month Required"),
  birthdayDay: z.string().min(1, "day Required"),
  birthdayYear: z.string().min(1, "year Required"),

  gender: z.enum(["female", "male", "custom"], {
    required_error: "Gender is required",
  }),

  email: z
    .string()
    .min(1, "Email or phone is required")
    .email("Enter a valid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default SignupSchemas