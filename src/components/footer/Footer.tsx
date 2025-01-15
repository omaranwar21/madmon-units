import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerData = [
  {
    title: "Contact Us",
    links: [
      { name: "42 Fareek Awal Ali Amer", icon: MapPin },
      { name: "01234568910", icon: Phone },
      { name: "hr@Madmon.ai", icon: Mail },
    ],
    hasIcon: true,
  },
  {
    title: "Useful Links",
    links: ["About us", "Privacy Policy", "Support", "Terms & Conditions"],
    hasIcon: false,
  },
];
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Logo-w.svg"
                width={208}
                height={208}
                alt="logo"
              />
            </div>
          </div>

          {footerData.map((data, index) => (
            <div
              key={index}
              className="relative pl-20 flex flex-col justify-center"
            >
              <div className="flex flex-col justify-evenly h-full">
                <h3 className="font-semibold mb-4 text-[#F2DB00] text-[16px]">
                  {data.title}
                </h3>
                <div className="space-y-2 text-[14px] text-white">
                  {data.links &&
                    data.links.map((link, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {data.hasIcon && typeof link !== "string" && (
                          <link.icon />
                        )}

                        <div>{typeof link === "string" ? link : link.name}</div>
                      </div>
                    ))}
                </div>
              </div>
              <span className="absolute left-0 top-0 h-full w-[2px] bg-[#F2DB00]"></span>
            </div>
          ))}

          <div className="relative pl-20 flex flex-col justify-center">
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-gray-200 border-[2px] rounded-[4px] p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 border-[2px] rounded-[4px] p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 border-[2px] rounded-[4px] p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
            <span className="absolute left-0 top-0 h-full w-[2px] bg-[#F2DB00]"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
