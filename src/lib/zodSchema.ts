import z from "zod";

export const signupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: "First Name must be more than 2 characters" })
    .max(12, { error: "First Name must be less than 12 characters" }),

  lastName: z
    .string()
    .min(3, { error: "Last Name must be more than 3 characters" })
    .max(12, { error: "Last Name must be less than 12 characters" }),

  email: z.email({ error: "Invalid email address" }),

  password: z
    .string()
    .min(8, { error: "Password must be more than 8 characters" })
    .max(32, { error: "Password must be less than 32 characters" }),

  role: z.string().length(9, { error: "Role is required" }),
});

export const signinFormSchema = z.object({
  email: z.email({ error: "Invalid email address" }),

  password: z
    .string()
    .min(8, { error: "Password must be more than 8 characters" })
    .max(32, { error: "Password must be less than 32 characters" }),

  rememberMe: z.boolean(),
});
