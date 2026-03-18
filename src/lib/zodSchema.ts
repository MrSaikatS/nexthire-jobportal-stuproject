import z from "zod";

export const signupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: "First Name must be more than 2 charecters" })
    .max(12, { error: "First Name must be less than 12 charecters" }),

  lastName: z
    .string()
    .min(3, { error: "Last Name must be more than 2 charecters" })
    .max(12, { error: "Last Name must be less than 12 charecters" }),

  email: z.email({ error: "invlid email address" }),

  password: z
    .string()
    .min(8, { error: "Password must be more than 8 charecters" })
    .max(32, { error: "Passowrd must be less than 32 charecters" }),

  // confrimPassword: z
  //   .string()
  //   .min(8, { error: "Password must be more than 8 charecters" })
  //   .max(32, { error: "Passowrd must be less than 32 charecters" }),

  role: z.string().length(9, { error: "Role is required" }),
});
// .refine(({ password, confrimPassword }) => password === confrimPassword, {
//   path: ["confrimPassword"],
//   error: "Password didn't match",
// });

export const signinFormSchema = z.object({
  email: z.email({ error: "invlid email address" }),

  password: z
    .string()
    .min(8, { error: "Password must be more than 8 charecters" })
    .max(32, { error: "Passowrd must be less than 32 charecters" }),

  rememberMe: z.boolean(),
});
