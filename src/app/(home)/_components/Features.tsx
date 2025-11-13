"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ContentLayout } from "@/components/common/common";
import { FeatureDropdown } from "./Dropdown";

export const FeaturesSection = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <div
      style={{
        background:
          "linear-gradient(182.2deg, #FFFFFF 1.9%, #F4F4F4 16.34%, #F4F4F4 50.05%, #F4F4F4 83.75%, #FFFFFF 98.2%)",
      }}>
      <ContentLayout>
        <div className="flex flex-col relative">
          <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-secondary to-primary bg-gradient-to-b bg-clip-text text-transparent">
            <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:z-10">
              GrowNext&nbsp;
            </span>
            Your ultimate workspace
          </h1>
          <h2 className="px-[10px] md:px-6 lg:px-[50px] text-center mt-4 text-[20px] leading-[120%] text-secondary">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit
            bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus
            purus semper penatibus sit quis. Morbi amet gravida scelerisque
            proin amet morbi.
          </h2>
          <div className="flex mt-[70px] lg:items-end lg:flex-row flex-col gap-y-4 items-center">
            <div className="order-1">
              <FeatureDropdown submenu={activeMenu} onChange={setActiveMenu} />
            </div>
            <div className="flex mx-auto relative -mb-4 order-0 lg:order-2">
              <Image
                src="/assets/feature_com.png"
                alt="Our Features"
                width={1450}
                height={940}
                className="max-w-[676px] w-full mx-auto z-10"
              />
              {activeMenu == 1 && (
                <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  Collaboration
                </div>
              )}
              {activeMenu == 2 && (
                <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  Task & Projects
                </div>
              )}
              {activeMenu == 3 && (
                <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  Sites & Stores
                </div>
              )}
              {activeMenu == 4 && (
                <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  HR & Automation
                </div>
              )}
              {activeMenu == 5 && (
                <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  CMS
                </div>
              )}
              <Image
                src="/assets/blue_polygon.png"
                alt="#"
                width={572}
                height={630}
                className="absolute lg:w-[280px] lg:h-[280px] w-[50%] right-0 top-0 translate-x-[3%] -translate-y-[20%]"
              />
            </div>
          </div>
          <div className="relative flex">
            <button className="mt-6 lg:mt-[66px] mx-auto rounded-[32px] bg-gradient-to-b from-secondary to-primary text-primary-foreground py-[0.5rem] px-[1rem]">
              Explore All Features
            </button>
            <div className="absolute -bottom-3 left-[48.5%] lg:-translate-x-[170%] md:-translate-x-[180%] -translate-x-[180%]">
              <Image
                src="/assets/feature_arrow.png"
                alt="↓"
                width={314}
                height={219}
                className="w-[100px] md:w-[120px] lg:w-[150px] hidden md:block"
              />
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
