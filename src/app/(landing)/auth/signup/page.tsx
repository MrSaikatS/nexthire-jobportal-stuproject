import { default as SignupForm } from "@/components/Forms/SignupForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import Link from "next/link";

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-6 py-4 md:grid-cols-2">
      <div className="hidden h-full w-full rounded-2xl bg-gray-300 md:block"></div>

      {/* form card  */}
      <Card className="">
        <CardHeader>
          <CardTitle className="text-3xl">Create an account.</CardTitle>
          <CardDescription className="text-lg">
            Let’s Ready to take the next step?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />

          <div className="my-4 flex w-full items-center">
            <div className="grow border-t border-gray-400"></div>
            <span className="px-3 text-lg">or</span>
            <div className="grow border-t border-gray-400"></div>
          </div>

          <div className="text-center text-base">
            Already have an account?
            <Link
              href="/auth/signin"
              className="text-blue-500">
              {" "}
              Login now
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
