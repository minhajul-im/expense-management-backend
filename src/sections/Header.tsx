"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-[15px] z-50">
      <div className="rounded-[60px] bg-white mx-auto p-[0.35rem] px-[12px] shadow 2xl:w-[1195px] xl:w-[1100px] w-[95%]">
        <div className="nav-center">
          <div className="flex gap-10">
            <Image
              src="/assets/logo.png"
              alt="GrowNext"
              width={126.5}
              height={50}
            />
            <div className="hidden xl:flex items-center gap-5">
              {[
                "Home",
                "Features",
                "Pricing",
                "Become a partner",
                "Support",
                "Contact",
              ].map((link) => (
		<Link
		key={link}
		href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
		// onClick={alert(link.toLowerCase().replaceAll(" ", "-"))}
		className={`hover:text-[#111111] ${
			pathname === (link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`) ? "text-[#111111]" : "text-[#666666]"
		}`}
		>
		{link}
		</Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex gap-5 ms-auto">
            <a href="#" className="text-[#111111] my-auto">
              Request a Demo
            </a>
            <button className="flex gap-2 items-center">
              <Image src="/assets/user.svg" alt="User" width={16} height={18} />
              Login
            </button>
            <button className="rounded-[32px] px-[1rem] py-[0.5rem] bg-gradient-to-b from-[#555555] to-[#000000] text-white">
              Start For Free
            </button>
          </div>
          <button
            className="mx-4 my-auto hover:shadow-lg flex xl:hidden duration-500 ease-in-out rounded-full w-12 h-12 justify-center items-center"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <span className="text-[20px]">☰</span>
          </button>
        </div>
        <div
          className={`overflow-hidden duration-300 ease-in-out ${
            openMobileMenu ? "h-56 sm:h-36 md:h-10" : "h-0"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-between px-4 mt-3">
            {[
              "Home",
              "Features",
              "Pricing",
              "Become a partner",
              "Support",
              "Contact",
            ].map((link, i) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
                className={`hover:text-[#111111] ${
                  pathname === (link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`) ? "text-[#111111]" : "text-[#666666]"
                } ${i % 2 == 0 ? "text-left" : "text-right"} sm:text-center`}
              >
                {link}
              </Link>
            ))}
          </div>
          <hr className="mt-3 md:hidden" />
          <div className="flex flex-col sm:flex-row sm:px-10 md:hidden">
            <div className="flex justify-between sm:gap-10 flex-wrap lg:px-4 ps-4 mt-3">
              {["Request Demo", "Login"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className={`flex gap-3 hover:text-[#111111] min-w-24 ${
                    pathname === (link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`) ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  {link === "Login" && (
                    <Image
                      src="/assets/user.svg"
                      alt="User"
                      width={16}
                      height={18}
                    />
                  )}
                  {link}
                </Link>
              ))}
            </div>
            <button className="sm:ms-auto rounded-[32px] px-[20px] py-3 mt-3 bg-gradient-to-b from-[#555555] to-[#000000] text-white">
              Start For Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
