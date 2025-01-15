import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const sidebarList = [
    { label: "My Account", href: "#" },
    { label: "My Units", href: "#" },
    { label: "My Reservations", href: "#" },
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(1);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-64">
      <ul className="flex flex-col w-100 gap-4">
        {sidebarList.map((item, index) => (
          <li
            key={index}
            className={`flex py-[10px] rounded-[10px] transition-all duration-300 bg-[#F2F3F4] ${
              activeIndex === index ? "border border-[#0512F5]" : ""
            }`}
          >
            <Link
              href={item.href}
              onClick={() => handleClick(index)}
              className={`flex-1 ml-10 font-medium text-[16px] group relative flex items-center transition-all duration-300 ${
                activeIndex === index
                  ? "text-[#0512F5] font-bold"
                  : "text-[#0512F5]"
              }`}
            >
              <span
                className={`before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 ${
                  activeIndex === index
                    ? "before:bg-[#0512F5] before:opacity-100 before:left-0"
                    : "before:bg-[#0512F5] before:opacity-0 before:-left-4 group-hover:before:left-0 group-hover:before:opacity-100"
                }`}
              ></span>
              <span
                className={`transition-all duration-500 ${
                  activeIndex === index ? "ml-4" : "group-hover:ml-4"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
