import Image from "next/image";

const FormSideBrandContentSection = () => {
  return (
    <div className="relative hidden w-[30%] shrink-0 flex-col items-center justify-center overflow-hidden border-r border-white/6 shadow-2xl md:flex">
      {/* radial gradient blobs pooling at the bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 55% at 50% 95%, rgba(34,197,94,0.20) 0%, transparent 60%)",
            "radial-gradient(ellipse 65% 45% at 15% 100%, rgba(234,179,8,0.22) 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 40% at 85% 100%, rgba(249,115,22,0.16) 0%, transparent 50%)",
          ].join(","),
        }}
      />

      {/* Dot grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Brand content */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-10 text-center">
        <Image
          src="/app-logo.png"
          alt="NextHire logo"
          width={120}
          height={120}
          className="object-contain"
        />

        <h1 className="text-xl font-semibold tracking-tight">
          Your dream job is waiting
        </h1>
        <p className="text-foreground/50 text-sm leading-relaxed">
          Build your profile and get discovered by top companies today.
        </p>
      </div>
    </div>
  );
};

export default FormSideBrandContentSection;
