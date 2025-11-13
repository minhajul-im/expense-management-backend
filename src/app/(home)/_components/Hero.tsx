import { ContentLayout } from "@/components/common/common";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <ContentLayout>
      <div className="flex w-full flex-col lg:flex-row items-center justify-between">
        <div className="w-[95%] lg:w-[400px] flex flex-col gap-8">
          <h1 className="text-[40px] md:text-[48px] lg:text-[56px] text-transparent font-medium leading-[104%] text-center lg:text-left">
            <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[20%] after:h-[22%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
              Powering{" "}
            </span>
            <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text">
              Your{" "}
            </span>
            <span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">
              Business{" "}
            </span>
            <span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">
              from One{" "}
            </span>
            <span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[110%] after:h-[22%] after:bg-cover after:bg-no-repeat after:bg-[url('/font_deco_short.png')] after:-z-20">
              Core.
            </span>
          </h1>
          <h2 className="text-secondary text-[20px] md:text-[24px] lg:text-[30px] leading-[140%] text-center lg:text-left">
            Stay organized by keeping everything in one place!
          </h2>

          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <button className="rounded-[32px] px-[1.5rem] py-[0.75rem] bg-gradient-to-b from-secondary to-primary text-primary-foreground">
              Start For Free
            </button>
            <button className="rounded-[32px] px-[1.5rem] py-[0.75rem] border border-primary">
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="relative flex">
          <div className="w-[100%] h-[504px] lg:w-[676px] lg:h-[477px] relative">
            <Image
              src="/intro.svg"
              alt="#"
              width={760}
              height={626}
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
          </div>
          <div className="w-[80px] h-[81px] lg:w-[216px] lg:h-[218px] absolute -bottom-2 lg:-bottom-0 right-20 lg:right-56 translate-x-[100%]">
            <Image
              src="/introdeco.svg"
              alt="Intro"
              width={235}
              height={238}
              className=""
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
