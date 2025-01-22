"use client";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-8.707-2.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414L11.414 11l1.293 1.293a1 1 0 01-1.414 1.414L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11 7.293 9.707a1 1 0 011.414-1.414L10 9.586l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="mt-4 text-red-500 text-lg font-medium">
        Oops! Failed to load units.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
