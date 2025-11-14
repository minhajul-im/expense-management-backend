"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ContentLayout } from "@/components/common/common";
import { FeatureDropdown } from "./Dropdown";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-custom-gradient py-[4.5rem]">
      <ContentLayout>
        <div className="flex flex-col relative">
          <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-secondary to-primary bg-gradient-to-b bg-clip-text text-transparent">
            <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:z-10">
              GrowNext&nbsp;
            </span>
            — Your ultimate workspace
          </h1>
          <h2 className="px-[10px] md:px-6 lg:px-[50px] text-center mt-[1rem] text-[20px] leading-[120%] text-secondary">
            A workspace designed to simplify how freelancers and businesses
            work, helping them organize, collaborate, and execute efficiently.
            AI-powered tools for tasks, collaboration, and communication keep
            all aligned and productive.
          </h2>
          <div className="flex mt-[3rem] lg:items-end lg:flex-row flex-col gap-y-4 items-center">
            <div className="order-1">
              <FeatureDropdown submenu={activeMenu} onChange={setActiveMenu} />
            </div>
            <div className="flex mx-auto relative -mb-4 order-0 lg:order-2">
              {!imageLoaded && (
                <div className="max-w-[676px] w-full h-[400px] md:h-[440px] bg-gray-200 animate-pulse rounded-xl mx-auto" />
              )}

              <Image
                src="/assets/feature_com.png"
                alt="Our Features"
                width={1450}
                height={940}
                className={`max-w-[676px] w-full mx-auto z-10 transition-opacity duration-500 ease-in-out ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                priority
              />

              {imageLoaded && activeMenu == 1 && (
                <LaptopTitle>Tasks & Collaboration</LaptopTitle>
              )}
              {imageLoaded && activeMenu == 2 && (
                <LaptopTitle>Human Resources</LaptopTitle>
              )}
              {imageLoaded && activeMenu == 3 && (
                <LaptopTitle>Sales</LaptopTitle>
              )}
              {imageLoaded && activeMenu == 4 && (
                <LaptopTitle>Finance</LaptopTitle>
              )}
              {imageLoaded && activeMenu == 5 && (
                <LaptopTitle>Website & Helpdesk</LaptopTitle>
              )}

              <Image
                src="/assets/blue_polygon.png"
                alt="#"
                width={572}
                height={630}
                priority
                className="absolute lg:w-[280px] lg:h-[280px] w-[50%] right-0 top-0 translate-x-[3%] -translate-y-[20%]"
              />
            </div>
          </div>
          <div className="relative flex">
            <Button size="explore">Explore all features</Button>

            <div className="absolute -bottom-3 left-[48.5%] lg:-translate-x-[170%] md:-translate-x-[180%] -translate-x-[180%]">
              <Image
                src="/assets/feature_arrow.png"
                alt="↓"
                width={314}
                height={219}
                priority
                className="w-[100px] md:w-[120px] lg:w-[150px] hidden md:block"
              />
            </div>
          </div>
        </div>
      </ContentLayout>
    </section>
  );
};

const LaptopTitle = ({ children }: { children: string }) => {
  return (
    <div className="text-[30px] font-bold absolute z-20 top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      {children}
    </div>
  );
};
