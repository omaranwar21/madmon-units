import { LucideProps } from "lucide-react";
import React from "react";

interface IProps {
  featureName: string;
  featureValue: string;
  featureIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}
const Feature = ({
  featureName,
  featureValue,
  featureIcon,
  className,
}: IProps) => {
  return (
    <div
      className={`flex flex-row lg:flex-row items-center gap-1 text-[#494949] text-[12px] ${className}`}
    >
      {React.createElement(featureIcon, {
        className:
          "h-6 w-6 border-[2px] p-1 rounded-[5px] border-[#6666FF] bg-white",
        color: "#6666FF",
      })}
      <span>
        {featureValue} {featureName}
      </span>
    </div>
  );
};

export default Feature;
