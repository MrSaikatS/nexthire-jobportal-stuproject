"use client";

import { SigninFormType } from "@/lib/types";
import { signinFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Checkbox } from "../shadcnui/checkbox";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const SigninForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    mode: "all",
  });

  const handleSigninFormSubmit = async (fValues: SigninFormType) => {
    await new Promise<void>((r) => setTimeout(r, 3000));

    try {
      toast.success("successfully signin");

      reset();
    } catch (err) {
      console.error(err);

      toast.error("signin failed");
    }

    console.log(fValues);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSigninFormSubmit)}
      className="space-y-4">
      {/* email field  */}
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field {...field}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Email"
              className="py-6"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Password field  */}
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field {...field}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Password"
              className="py-6"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Remember me Check box */}
      <Controller
        name="rememberMe"
        control={control}
        render={({ field, fieldState }) => (
          <Field
            {...field}
            orientation="horizontal">
            <Checkbox
              id="rememberMe"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="border border-blue-500 data-checked:border-blue-500 data-checked:bg-blue-500"
            />
            <FieldLabel htmlFor="rememberMe">Remember Me</FieldLabel>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="w-full bg-blue-500 py-6 text-white"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <Loader2Icon className="animate-spin" />
            Signing in...
          </>
        : "Sign in"}
      </Button>
    </form>
  );
};

export default SigninForm;
