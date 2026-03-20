import SigninWithGoogleButton from "@/components/Buttons/SigninWithGoogleButton";
import SigninForm from "@/components/Forms/SigninForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signin Page - NextHire",
  description: "Signin page of NextHire application",
};

const page = () => {
  return (
    <section className="grid w-full grid-cols-1 place-items-center gap-6 py-4 md:grid-cols-2">
      <div className="hidden h-full w-full rounded-2xl bg-gray-300 md:block"></div>

      {/* form card  */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome Back</CardTitle>
          <CardDescription className="text-lg">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Signin with google button componenet */}
          <SigninWithGoogleButton />

          {/* sign in form component */}
          <SigninForm />

          <div className="my-4 flex w-full items-center">
            <div className="grow border-t border-gray-400"></div>
            <span className="px-3 text-lg">or</span>
            <div className="grow border-t border-gray-400"></div>
          </div>

          <div className="text-center text-base">
            Don’t have an account?
            <Link
              href="/auth/signup"
              className="text-blue-500">
              {" "}
              Create one here
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
