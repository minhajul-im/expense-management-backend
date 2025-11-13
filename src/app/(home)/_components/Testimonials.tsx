"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cnt = 8;
  const [curIdx, setCurIdx] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.firstChild as HTMLElement;
      if (firstChild) {
        const amount = parseFloat(window.getComputedStyle(firstChild).width);
        const newTransform = `translateX(-${amount * curIdx}px)`;
        sliderRef.current.style.transform = newTransform;
      }
    }
  }, [curIdx]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurIdx((prevIdx) => (prevIdx + 1) % (cnt - 3));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [curIdx]);

  return (
    <div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto relative">
      <div className="flex gap-[50px] flex-col mt-[100px]">
        <div>
          <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
            How Agencies Grow With&nbsp;
            <span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
              GrowNext
            </span>
          </h1>
          <h2 className="text-center mt-4 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit
            bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus
            purus semper penatibus sit quis. Morbi amet gravida scelerisque
            proin amet morbi.
          </h2>
        </div>
        <div className="overflow-hidden flex flex-col">
          <div
            className="flex -mr-[30px] mb-[90px] duration-500 ease-in-out"
            ref={sliderRef}>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo1.svg"
                  alt="logo"
                  width={142}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user1.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo2.svg"
                  alt="logo"
                  width={165}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    350
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    People
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user2.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo3.svg"
                  alt="logo"
                  width={126}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user3.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo4.svg"
                  alt="logo"
                  width={151}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    +10%
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    Utilization
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user4.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo1.svg"
                  alt="logo"
                  width={142}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user1.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo2.svg"
                  alt="logo"
                  width={165}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    350
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    People
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user2.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo3.svg"
                  alt="logo"
                  width={126}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user3.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo4.svg"
                  alt="logo"
                  width={151}
                  height={30}
                  className="mx-auto"></Image>
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-[#111111] leading-[120%] font-bold">
                    +10%
                  </div>
                  <div className="text-[20px] text-[#374550] leading-[120%] font-medium">
                    Utilization
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user4.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto text-center flex gap-[5px]">
            {Array.from({ length: cnt - 3 }).map((_, id) => (
              <button
                key={id}
                className={`w-[30px] h-[3px] rounded-[30px] duration-200  ${
                  curIdx == id ? "bg-[#111111]" : "bg-[#CACDD2]"
                } `}
                onClick={() => setCurIdx(id)}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
