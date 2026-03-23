import { CustomLayoutProps } from "@/lib/types";

const AuthLayout = ({ children }: CustomLayoutProps) => {
  return (
    <section className="grid h-dvh place-items-center">{children}</section>
  );
};

export default AuthLayout;
