import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import z from "zod";
import { signinFormSchema, signupFormSchema } from "./zodSchema";

export type LayoutChildrenProps = Readonly<{
  children: ReactNode;
}>;

export type AdvantageCardType = {
  id: number;
  icon: LucideIcon;
  heading: string;
  description: string;
};

export type CustomLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type SignupFormType = z.infer<typeof signupFormSchema>;

export type SigninFormType = z.infer<typeof signinFormSchema>;
