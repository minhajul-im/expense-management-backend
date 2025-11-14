import { ContentLayout } from "@/components/common/common";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <ContentLayout>
      <div className="flex w-full flex-col lg:flex-row items-center justify-between">
        <div className="w-[95%] lg:w-[50%] flex flex-col gap-8">
          <h1 className="text-[40px] md:text-[48px] lg:text-[56px] text-transparent font-medium leading-[104%] text-center lg:text-left flex flex-col">
            <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text relative">
              <span className="from-mild to-dark bg-gradient-to-b bg-clip-text">
                Powering your{" "}
              </span>
              <span className="font-extrabold">business</span>
              {/* <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[20%] after:h-[22%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
               {" "}
              </span> */}{" "}
            </span>
            <span>
              <span className="from-mild to-dark bg-gradient-to-b bg-clip-text">
                with{" "}
              </span>
              <span className="from-secondary to-primary bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[20%] after:h-[22%] after:bg-cover after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
                AI & automation{" "}
              </span>
            </span>
            <span>
              <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold">
                from one core
              </span>
              <span className="from-mild to-dark bg-gradient-to-b bg-clip-text">
                .
              </span>
            </span>
          </h1>
          <h2 className="text-secondary text-[20px] md:text-[24px] lg:text-[30px] leading-[140%] text-center lg:text-left flex flex-col">
            <span>Stay organized, connected, and</span>
            <span>on track — across your entire workflow.</span>
          </h2>

          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="https://dashboard.grownext.app/register">
              <Button>Start for free</Button>
            </Link>
            <Link href="/contact">
              <Button size="outline"> Schedule a demo</Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <Image
            src="/intro.svg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        {/* <div className="w-[80px] h-[81px] lg:w-[216px] lg:h-[218px] absolute -bottom-2 lg:-bottom-0 right-20 lg:right-56 translate-x-[100%]">
            <Image
              src="/introdeco.svg"
              alt="Intro"
              width={235}
              height={238}
              className=""
            />
          </div> */}
      </div>
    </ContentLayout>
  );
};
