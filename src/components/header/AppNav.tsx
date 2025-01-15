"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

interface IProps {
  type: "nav" | "sheet";
}

const navItemsStyle = "text-[#0512F5] text-[20px]";
const AppNav = ({ type }: IProps) => {
  const [logDropdown, setLogDropdown] = useState(false);

  if (type === "nav") {
    return (
      <nav className="hidden md:flex items-center gap-[34px]">
        <Link href="#" className={navItemsStyle}>
          Home
        </Link>
        <Link href="#" className={navItemsStyle}>
          About
        </Link>
        <Link href="#" className={navItemsStyle}>
          Contact
        </Link>
        <Link
          href="#"
          className={`flex items-center gap-[4px] justify-center ${navItemsStyle}`}
        >
          <Image
            className="mb-[2px]"
            alt=""
            src="/assets/marketeq_favourite.svg"
            width={21}
            height={19}
          />
          Favourite
        </Link>
        <Link
          href="#"
          className={`flex items-center gap-[4px] justify-center ${navItemsStyle}`}
        >
          <Image
            className="mb-[2px]"
            alt=""
            src="/assets/earth.svg"
            width={19}
            height={19}
          />
          EN
        </Link>
        <div className="flex items-center gap-1">
          <Image
            src="/assets/Ellipse 156.svg"
            width={25}
            height={25}
            alt="user-pic"
          />
          <DropdownMenu onOpenChange={() => setLogDropdown(!logDropdown)}>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Omar Mohamed
              <Image
                src="/assets/arrow.svg"
                width={15}
                height={15}
                alt="arrow"
                className={`transform transition-transform duration-300 ${
                  logDropdown ? "rotate-180" : ""
                }`}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-[#0512F5]">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    );
  }

  if (type === "sheet") {
    return (
      <div className="md:hidden">
        <Sheet>
          <SheetTitle title="Menu" className="hidden" />
          <SheetTrigger asChild>
            <Button
              variant="default"
              className="bg-[#0512F5] text-white hover:bg-white hover:text-[#0512F5] border border-[#0512F5]"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/logo.svg"
                  width={154}
                  height={154}
                  alt="logo"
                />
              </div>
            </SheetHeader>
            <div className="flex flex-col space-y-2 text-start sm:text-left">
              <Link href="#" className={navItemsStyle}>
                Home
              </Link>
              <Link href="#" className={navItemsStyle}>
                About
              </Link>
              <Link href="#" className={navItemsStyle}>
                Contact
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-[4px] ${navItemsStyle}`}
              >
                <Image
                  className="mb-[2px]"
                  alt=""
                  src="/assets/marketeq_favourite.svg"
                  width={21}
                  height={19}
                />
                Favourite
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-[4px] ${navItemsStyle}`}
              >
                <Image
                  className="mb-[2px]"
                  alt=""
                  src="/assets/earth.svg"
                  width={19}
                  height={19}
                />
                EN
              </Link>
            </div>

            <SheetFooter className="absolute bottom-5 flex sm:flex-col space-y-2 text-start sm:text-left sm:justify-start">
              <div className="flex items-center gap-1 mx-0">
                <Image
                  src="/assets/Ellipse 156.svg"
                  width={25}
                  height={25}
                  alt="user-pic"
                />
                <DropdownMenu onOpenChange={() => setLogDropdown(!logDropdown)}>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    Omar Mohamed
                    <Image
                      src="/assets/arrow.svg"
                      width={15}
                      height={15}
                      alt="arrow"
                      className={`transform transition-transform duration-300 ${
                        logDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="text-[#0512F5]">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
};

export default AppNav;
