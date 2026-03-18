"use client";

import { SigninFormType } from "@/lib/types";
import { signinFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

import { Checkbox } from "../shadcnui/checkbox";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const SigninForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const handleSigninFormSubmit = (fValues: SigninFormType) => {
    try {
      console.log(fValues);
      toast.success("success");
    } catch (error) {
      console.error(error);
      toast.error("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSigninFormSubmit)}
      className="space-y-4 py-4">
      {/* Email field  */}
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
              className="rounded-lg"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* password field  */}
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
              placeholder="Enter Your password"
              className="rounded-lg"
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
            />
            <FieldLabel htmlFor="rememberMe">Remember Me</FieldLabel>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="w-full rounded-lg"
        disabled={isSubmitting}>
        {isSubmitting ? "Logging..." : "Login"}
      </Button>
    </form>
  );
};

export default SigninForm;
