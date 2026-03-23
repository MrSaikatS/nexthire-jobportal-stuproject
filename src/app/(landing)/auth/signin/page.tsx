import SigninWithGoogleButton from "@/components/Buttons/SigninWithGoogleButton";
import SigninForm from "@/components/Forms/SigninForm";
import FormSideBrandContentSection from "@/components/Section/FormSideBrandContentSection";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signin Page - NextHire",
  description: "Signin page of NextHire application",
};

const page = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden">
      {/* Left branding panel hidden on mobile */}
      <FormSideBrandContentSection />

      {/*  Right form panel */}
      <div className="flex flex-1 flex-col">
        {/* Centered form */}
        <div className="flex flex-1 items-center justify-center px-6 pb-16">
          <div className="w-full max-w-95 space-y-5">
            {/* Heading */}
            <div className="space-y-1">
              <h2 className="text-[1.75rem] font-semibold tracking-tight">
                Welcome Back
              </h2>
              <p className="text-foreground/50 text-sm">
                Sign in to your account
              </p>
            </div>

            {/* signin with google button */}
            <SigninWithGoogleButton />

            {/* signin form */}
            <SigninForm />

            {/* Divider */}
            <div className="my-4 grid grid-cols-5 place-items-center">
              <Separator className="col-span-2" />
              <span className="px-3 text-lg">or</span>
              <Separator className="col-span-2" />
            </div>

            {/* don't have account? signup link */}
            <p className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-400 transition-colors hover:text-blue-300">
                Create one here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
