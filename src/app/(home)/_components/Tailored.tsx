"use client";

import { ContentLayout } from "@/components/common/common";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const TailoredSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="bg-custom-gradient">
      <ContentLayout>
        <div className="flex justify-center flex-col gap-[3rem] pt-[4.5rem]">
          <div className="flex justify-center flex-col">
            <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[106%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
              Crafting Exceptional&nbsp;
              <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
                Websites&nbsp;
              </span>
              Tailored to Your Vision.
            </h1>
            <h2 className="text-center mt-[1rem] text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
              From design to deployment, we create websites that are visually
              stunning, highly functional, and customized to your unique
              requirements.
            </h2>
            <div className="mt-[1rem] flex mx-auto gap-5">
              <Link href="https://dashboard.grownext.app/register">
                <Button>Start for free</Button>
              </Link>

              <Link href="/contact">
                <Button size="outline"> Schedule a demo</Button>
              </Link>
            </div>
          </div>

          <Image
            src="/tailored.svg"
            width={700}
            height={300}
            alt="#"
            onLoad={() => setImageLoaded(true)}
            priority
            className={`max-w-[700px] w-full mx-auto transition-opacity duration-500 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </ContentLayout>
    </section>
  );
};
