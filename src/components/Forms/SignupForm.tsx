"use client";

import { SignupFormType } from "@/lib/types";
import { signupFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldContent, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import { RadioGroup, RadioGroupItem } from "../shadcnui/radio-group";

const SignupForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    },
    mode: "all",
  });

  const handleSignupFormSubmit = async (fValues: SignupFormType) => {
    await new Promise<void>((r) => setTimeout(r, 3000));

    try {
      toast.success("successfully signup");

      reset();
    } catch (err) {
      console.error(err);

      toast.error("signup failed");
    }

    console.log(fValues);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignupFormSubmit)}
      className="space-y-4">
      <div className="gap-4 md:flex">
        {/* first Name field  */}
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Field {...field}>
              <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your first name"
                className="py-6"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* last Name field  */}
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Field {...field}>
              <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your last name"
                className="py-6"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

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

      {/* select role field  */}
      <Controller
        name="role"
        control={control}
        render={({ field, fieldState }) => (
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
            aria-invalid={fieldState.invalid}
            className="">
            <div className="flex gap-4">
              <FieldLabel
                htmlFor="candidate"
                className="shadow-lg">
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}>
                  <FieldContent className="grid place-items-center text-blue-500">
                    <Image
                      src="/candidate.png"
                      alt="candidate"
                      height={120}
                      width={120}
                      className="p-4"
                    />
                    Candidate
                  </FieldContent>
                  <RadioGroupItem
                    value="candidate"
                    id="candidate"
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              </FieldLabel>

              <FieldLabel
                htmlFor="recruiter"
                className="shadow-lg">
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}>
                  <FieldContent className="grid place-items-center text-blue-500">
                    <Image
                      src="/recruiter.png"
                      alt="recruiter"
                      height={120}
                      width={120}
                    />
                    Recruiter
                  </FieldContent>
                  <RadioGroupItem
                    value="recruiter"
                    id="recruiter"
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              </FieldLabel>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </RadioGroup>
        )}
      />

      <Button
        type="submit"
        className="w-full bg-blue-500 py-6 text-white"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <Loader2Icon className="animate-spin" />
            Sign Up...
          </>
        : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignupForm;
