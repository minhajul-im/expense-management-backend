"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { ContentLayout } from "@/components/common/common";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Become a partner", path: "/become-a-partner" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
  ];

  const extraMenus = [
    { name: "Request Demo", path: "https://dashboard.grownext.app/register" },
    { name: "Login", path: "https://dashboard.grownext.app/login" },
  ];

  return (
    <header className="fixed w-full top-[15px] z-[9999]">
      <ContentLayout
        childClass="py-2"
        className="rounded-default shadow-lg bg-header">
        <div className="nav-center">
          <div className="flex gap-10">
            <Link href="/">
              <Image
                src="/grownext-logo.svg"
                alt="GrowNext"
                width={175}
                height={75}
                className="object-contain"
              />
            </Link>
            <div className="hidden xl:flex items-center gap-5">
              {menus.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`hover:text-primary ${
                    pathname === link.path ? "text-primary" : "text-secondary"
                  }`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5 ms-auto">
            <Link
              href="https://dashboard.grownext.app/register"
              className="text-primary my-auto">
              Request a Demo
            </Link>
            <Link href="https://dashboard.grownext.app/login">
              <button className="flex gap-2 items-center">
                <UserRound width={18} height={20} />
                Login
              </button>
            </Link>
            <Link href="https://dashboard.grownext.app/register">
              <Button size="md">Start For Free</Button>
            </Link>
          </div>
          <button
            className="mx-4 my-auto hover:shadow-lg flex xl:hidden duration-500 ease-in-out rounded-full w-12 h-12 justify-center items-center"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            <span className="text-[20px]">☰</span>
          </button>
        </div>
        <div
          className={`overflow-hidden duration-300 ease-in-out ${
            openMobileMenu ? "max-h-56 sm:h-36 md:h-10" : "h-0"
          }`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-between px-4 mt-3">
            {menus.map((link, i) => (
              <Link
                key={link.name}
                href={link.path}
                className={`hover:text-primary ${
                  pathname === link.path ? "text-primary" : "text-secondary"
                } ${i % 2 == 0 ? "text-left" : "text-right"} sm:text-center`}>
                {link.name}
              </Link>
            ))}
          </div>
          <hr className="mt-3 md:hidden" />
          <div className="flex flex-col sm:flex-row sm:px-10 md:hidden">
            <div className="flex justify-between sm:gap-10 flex-wrap lg:px-4 ps-4 mt-3">
              {extraMenus.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex gap-3 hover:text-primary min-w-24 ${
                    pathname === link.path ? "text-primary" : "text-secondary"
                  }`}>
                  {link.name === "Login" && (
                    <Image
                      src="/assets/user.svg"
                      alt="User"
                      width={16}
                      height={18}
                    />
                  )}
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="https://dashboard.grownext.app/register"
              className="p-3 w-full">
              <Button className="w-full">Start For Free</Button>
            </Link>
          </div>
        </div>
      </ContentLayout>
    </header>
  );
};
