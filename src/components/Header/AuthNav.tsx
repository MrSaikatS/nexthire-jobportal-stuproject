import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { Separator } from "../shadcnui/separator";

const AuthNav = () => {
  return (
    <nav className="ms-auto flex items-center gap-4">
      <Link
        href="/"
        className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
        <ChevronLeftIcon />
        Home
      </Link>

      <Separator orientation="vertical" />
      <ThemeToggleButton />
      <Separator orientation="vertical" />
    </nav>
  );
};

export default AuthNav;
