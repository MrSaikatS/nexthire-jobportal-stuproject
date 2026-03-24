import SplitText from "@/components/SplitText";
import {
  BriefcaseBusinessIcon,
  ChevronRightIcon,
  MoveRightIcon,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col space-y-4 text-center">
      <div className="mx-auto flex w-3xs cursor-pointer justify-center gap-4 rounded-full border border-black/24 bg-white/2 py-1.5 hover:bg-white/3 dark:border-white/24">
        <BriefcaseBusinessIcon /> <span>|</span> For Job Seekers
        <ChevronRightIcon />
      </div>

      {/* main heading  */}
      <SplitText
        tag="h1"
        className="text-2xl font-bold md:text-4xl lg:text-6xl"
        duration={0.8}
        delay={30}>
        Where <span className="text-blue-600 dark:text-blue-500">Talent</span>{" "}
        Meets{" "}
        <span className="text-blue-600 dark:text-blue-500">Opportunity</span>
      </SplitText>

      {/* sub heading  */}
      <h2 className="text-lg font-light md:text-2xl">
        Explore opportunities, showcase your{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-500">
          Skills
        </span>{" "}
        , and get{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-500">
          Hired
        </span>{" "}
        faster
      </h2>

      {/* paragraph visible tab  */}
      <p className="hidden text-balance text-black/75 md:block dark:text-white/75">
        Where talent meets opportunity—explore a wide range of roles tailored to
        your skills, showcase your strengths to the right employers, and
        accelerate your journey toward getting hired faster with confidence and
        ease
      </p>

      {/* paragraph for mobile  */}
      <p className="block text-black/75 md:hidden dark:text-white/75">
        Where talent meets opportunity discover roles that match your skills,
        showcase your potential, and get hired faster with confidence.
      </p>

      {/* call to action button  */}
      <Link
        href="/auth/signup"
        className="mx-auto flex items-center gap-2 rounded-xl bg-blue-600 px-12 py-2.5 text-[16px] text-white hover:bg-blue-800 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700">
        Get Hired
        <MoveRightIcon />
      </Link>
    </section>
  );
};

export default Hero;
