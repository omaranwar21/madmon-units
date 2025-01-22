import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <Image src="/assets/logo.svg" width={154} height={154} alt="logo" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      <p className="mt-4 text-blue-500 text-lg font-medium">
        Loading units, please wait...
      </p>
    </div>
  );
};

export default Loading;
