import SplitText from "@/components/SplitText";
import {
  BriefcaseBusinessIcon,
  ChevronRightIcon,
  MoveRightIcon,
} from "lucide-react";
import Link from "next/link";

const PostHero = () => {
  return (
    <section className="flex flex-col space-y-4 text-center">
      {/* badge  */}
      <div className="mx-auto flex w-3xs cursor-pointer justify-center gap-4 rounded-full border border-black/24 bg-white/2 py-1.5 hover:bg-white/3 dark:border-white/24">
        <BriefcaseBusinessIcon /> <span>|</span> For Recruiter
        <ChevronRightIcon />
      </div>

      {/* Heading  */}
      <SplitText
        tag="h1"
        className="text-2xl font-bold md:text-4xl lg:text-6xl"
        duration={0.8}
        delay={30}>
        The <span className="text-blue-600 dark:text-blue-500">Future of</span>{" "}
        Hiring{" "}
        <span className="text-blue-600 dark:text-blue-500">Begins Now</span>
      </SplitText>

      <h2 className="text-lg font-light md:text-2xl">
        Next Hire connects talent with{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-500">
          opportunity
        </span>{" "}
        making hiring{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-500">
          simple and fast
        </span>
      </h2>

      {/* paragraph visible tab  */}
      <p className="hidden text-balance text-black/75 md:block dark:text-white/75">
        Where talent meets opportunity, you can explore roles tailored to your
        skills, showcase your strengths to the right employers, and move forward
        in your career with confidence, ease, and a faster path to getting
        hired.
      </p>

      {/* paragraph for mobile  */}
      <p className="block text-black/75 md:hidden dark:text-white/75">
        The future of hiring begins now with Next Hire, connecting talent with
        the right opportunities in a fast and simple way, making the hiring
        process smoother and more efficient for everyone.
      </p>

      {/* call to action button  */}
      <Link
        href="/auth/signup"
        className="mx-auto flex items-center gap-2 rounded-xl bg-blue-600 px-12 py-2.5 text-[16px] text-white hover:bg-blue-800 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700">
        Post a job
        <MoveRightIcon />
      </Link>
    </section>
  );
};

export default PostHero;
