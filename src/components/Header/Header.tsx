"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthNav from "./AuthNav";
import LandingNav from "./LandingNav";

const Header = () => {
  const path = usePathname();

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 ${path === "/auth/signup" || path === "/auth/signin" ? "backdrop-blur-md" : "border-b shadow backdrop-blur-lg"}`}
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo  */}

        {/* swith nav Logo  */}
        {path === "/auth/signup" || path === "/auth/signin" ? null : (
          <Link
            href={"/"}
            aria-label="Next-Hire-Logo">
            <Image
              src={"/app-logo.png"}
              alt="NextHire-Logo"
              height={100}
              width={100}
              loading="eager"
              className="h-10 w-auto"
            />
          </Link>
        )}

        {/* swith nav Items  */}
        {path === "/auth/signup" || path === "/auth/signin" ?
          <AuthNav />
        : <LandingNav />}
      </div>
    </header>
  );
};

export default Header;
