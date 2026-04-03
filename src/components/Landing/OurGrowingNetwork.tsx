import CountUp from "@/components/CountUp";
import { BriefcaseBusinessIcon, Building2Icon, UsersIcon } from "lucide-react";

const OurGrowingNetwork = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 rounded-xl py-10 md:grid-cols-3 md:gap-0">
      {/* 1st column */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-3xl font-bold">
          <UsersIcon size={30} />
          <span>
            <CountUp to={72} />+
          </span>
        </div>
        <div className="font-medium md:text-[22px]"> Active Job Seekers</div>
      </div>

      {/* 2nd column */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-3xl font-bold">
          <Building2Icon size={30} />
          <span>
            <CountUp to={100} />+
          </span>
        </div>
        <div className="font-medium md:text-[22px]"> Active Companies</div>
      </div>

      {/* 3rd column */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-3xl font-bold">
          <BriefcaseBusinessIcon size={30} />
          <span>
            <CountUp to={100} />+
          </span>
        </div>
        <div className="font-medium md:text-[22px]">Total Job Posts</div>
      </div>
    </div>
  );
};

export default OurGrowingNetwork;
