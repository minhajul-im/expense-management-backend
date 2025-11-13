import { ContentLayout } from "@/components/common/common";
import Image from "next/image";

export const TailoredSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(182.2deg, #FFFFFF 1.9%, #F4F4F4 16.34%, #F4F4F4 50.05%, #F4F4F4 83.75%, #FFFFFF 98.2%)",
      }}
      className="-z-50">
      <ContentLayout>
        <div className="flex justify-center flex-col gap-[35px] pt-8">
          <div className="flex justify-center flex-col">
            <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[106%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
              Crafting Exceptional&nbsp;
              <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
                Websites&nbsp;
              </span>
              Tailored to Your Vision.
            </h1>
            <h2 className="text-center mt-7 text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
              From design to deployment, we create websites that are visually
              stunning, highly functional, and customized to your unique
              requirements.
            </h2>
            <div className="mt-6 md:mt-8 lg:mt-10 flex mx-auto gap-5">
              <button className="rounded-[32px] px-[1.5rem] py-[0.75rem] bg-gradient-to-b from-mild to-dark text-light">
                Start For Free
              </button>
              <button className="rounded-[32px] px-[1.5rem] py-[0.75rem] border border-[#111111]">
                Schedule a Demo
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <Image
              src="/tailored.svg"
              width={700}
              height={300}
              alt="#"
              className="max-w-[700px] w-full"
            />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
