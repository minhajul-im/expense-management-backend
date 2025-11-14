"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ContentLayout } from "@/components/common/common";

export const TestimonialsSection = () => {
  const cnt = 8;
  const [curIdx, setCurIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    <ContentLayout className="mt-[4.5rem]">
      <div className="flex gap-[3rem] flex-col">
        <div>
          <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
            How Agencies Grow With&nbsp;
            <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
              GrowNext
            </span>
          </h1>
          <h2 className="text-center mt-[1rem] text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
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
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo1.svg"
                  alt="logo"
                  width={142}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user1.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo2.svg"
                  alt="logo"
                  width={165}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    350
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    People
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user2.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo3.svg"
                  alt="logo"
                  width={126}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user3.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo4.svg"
                  alt="logo"
                  width={151}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    +10%
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    Utilization
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user4.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo1.svg"
                  alt="logo"
                  width={142}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user1.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo2.svg"
                  alt="logo"
                  width={165}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    350
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    People
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user2.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo3.svg"
                  alt="logo"
                  width={126}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    53%
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    Growth
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user3.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] lg:min-w-[25%] pr-[30px]">
              <div className="rounded-default bg-gradient-to-b from-border to-light pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
                <Image
                  src="/assets/test-logo4.svg"
                  alt="logo"
                  width={151}
                  height={30}
                  priority
                  className="mx-auto"
                />
                <div className="flex items-baseline gap-2.5 mx-auto">
                  <div className="text-[42px] text-primary leading-[120%] font-bold">
                    +10%
                  </div>
                  <div className="text-[20px] text-secondary-dark leading-[120%] font-medium">
                    Utilization
                  </div>
                </div>
                <div className="text-[20px] leading-[120%] text-secondary mx-auto text-center">
                  Company name grew 27% in under a year using Productive
                </div>
                <div className="rounded-full p-[5px] bg-light w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
                  <Image
                    src="/assets/test-user4.svg"
                    alt="user1"
                    width={90}
                    height={90}
                    priority
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
                  curIdx == id ? "bg-primary" : "bg-light-dark"
                } `}
                onClick={() => setCurIdx(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
