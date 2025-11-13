"use client";

import { DiLinux } from "react-icons/di";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillWindows } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import { ContentLayout } from "@/components/common/common";

export const SupportSection = () => {
  return (
    <section className="bg-custom-gradient z-50">
      <ContentLayout>
        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex-1">
            <div className="relative w-fit">
              <div className="absolute -z-20 lg:-top-24 left-0 -top-12">
                <Image
                  src="/assets/supportcomdecoleft.svg"
                  alt="deco"
                  width={286}
                  height={316}
                  className="lg:w-[290px] w-[140px]"
                />
              </div>
              <div className="relative w-full">
                <div className="lg:w-[500px] lg:h-[340px] relative -z-10 w-[350px] h-[240px]">
                  <Image
                    src="/assets/supportcom.svg"
                    alt="com"
                    width={532}
                    height={350}
                    className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                  />
                </div>
                <div className="absolute lg:top-[65px] top-[55px] left-[50%] -translate-x-[50%] z-50 w-[60%] px-2">
                  <button
                    className="rounded-default border border-dark lg:py-1.5 py-0.5 px-3 flex justify-between items-center cursor-pointer w-full"
                    onClick={() => alert("Windows Version Download")}>
                    <div className="flex items-center gap-4">
                      <AiFillWindows size={34} className="hidden lg:block" />
                      <AiFillWindows size={20} className="block lg:hidden" />
                      <div className="text-lg font-bold">Windows</div>
                    </div>
                    <AiOutlineDownload size={30} className="hidden lg:block" />
                    <AiOutlineDownload size={18} className="block lg:hidden" />
                  </button>
                  <button
                    className="rounded-default lg:mt-4 mt-2 border border-dark lg:py-1.5 py-0.5 px-3 flex justify-between items-center cursor-pointer w-full"
                    onClick={() => alert("MacOS Version Download")}>
                    <div className="flex items-center gap-[14px]">
                      <AiFillApple size={36} className="hidden lg:block" />
                      <AiFillApple size={22} className="block lg:hidden" />
                      <div className="text-lg font-bold">MacOS</div>
                    </div>
                    <AiOutlineDownload size={30} className="hidden lg:block" />
                    <AiOutlineDownload size={18} className="block lg:hidden" />
                  </button>
                  <button
                    className="rounded-default lg:mt-4 mt-2 border border-dark lg:py-1.5 py-0.5 px-3 flex justify-between items-center cursor-pointer w-full"
                    onClick={() => alert("Linux Version Download")}>
                    <div className="flex items-center gap-4">
                      <DiLinux size={34} className="hidden lg:block" />
                      <DiLinux size={20} className="block lg:hidden" />
                      <div className="text-lg font-bold">Linux</div>
                    </div>
                    <AiOutlineDownload size={30} className="hidden lg:block" />
                    <AiOutlineDownload size={18} className="block lg:hidden" />
                  </button>
                </div>
              </div>
              <div className="absolute -z-20 lg:-bottom-[57px] lg:-right-[103px] px-5 -bottom-10 -right-10">
                <Image
                  src="/assets/supportcomdecoright.svg"
                  alt="deco"
                  width={286}
                  height={316}
                  className="lg:w-[290px] w-[140px]"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 pt-24 lg:pt-6 flex flex-col gap-[50px]">
            <div>
              <h1 className="text-center lg:text-start px-0 text-[36px] md:text-[40px] lg:text-[40px] leading-[120%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
                Accessible Anytime, Anywhere
              </h1>
              <h2 className="text-center lg:text-start px-0 mt-4 lg:mt-6 text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
                Effortless Access and Management Across All Platforms – Desktop
                Apps for Windows, macOS, and Linux, Plus Mobile Apps for Android
                and iOS.
              </h2>
            </div>
            <div className="mx-auto flex gap-[30px] items-end">
              <div>
                <Image
                  src="/assets/supportandroid.svg"
                  alt="android"
                  width={194}
                  height={310}></Image>
              </div>
              <div>
                <Image
                  src="/assets/supportios.svg"
                  alt="android"
                  width={194}
                  height={262}></Image>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </section>
  );
};
