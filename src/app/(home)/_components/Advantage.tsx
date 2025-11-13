import { ContentLayout } from "@/components/common/common";
import Image from "next/image";

export const AdvantageSection = () => {
  return (
    <ContentLayout>
      <div className="px-[20px] lg:px-[60px] py-[30px] mt-8 lg:mt-[70px] shadow-[0px_10px_25px_-3px_#00000026] rounded-[20px]">
        <div className="text-center">
          <h1 className="text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
            Why Choose &nbsp;
            <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
              GrowNext&nbsp;
            </span>
            ERP?
          </h1>
          <h2 className="text-center mt-4 text-[20px] leading-[27px] text-[#666666]">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit
            bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus
            purus semper penatibus sit quis. Morbi amet gravida scelerisque
            proin amet morbi.
          </h2>
        </div>
        <div className="mt-[50px] gap-[50px] grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-gradient-to-b from-social to-primary-foreground rounded-[20px] p-[30px] flex flex-col">
            <h3 className="text-[30px] leading-[36px] font-bold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
              Without GrowNext ERP
            </h3>
            <div className="flex mt-[30px] gap-[25px] flex-col">
              <CrossTitle>
                Data scattered throughout multiple tools and spreadsheets
              </CrossTitle>
              <CrossTitle>
                {" "}
                No idea who&apos;s scheduled on which project and when
              </CrossTitle>
              <CrossTitle>
                Difficulty finding out how much of a budget has been spent
              </CrossTitle>
              <CrossTitle>Limited access to real-time reporting</CrossTitle>
            </div>
          </div>
          <div
            className="bg-primary-foreground rounded-[20px] p-[2px] flex flex-col bg-clip-content relative border-transparent shadow-[0px_10px_25px_-3px_#00000026]
                    before:content-[''] before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-dark before:to-primary-foreground before:w-full before:h-full before:-z-10 before:rounded-[20px]">
            <div className="p-[28px]">
              <h3 className="text-[30px] leading-[36px] font-bold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
                With GrowNext ERP
              </h3>
              <div className="flex mt-[30px] gap-[25px] flex-col">
                <CorrectTitle>
                  Consolidated data in one agency management system
                </CorrectTitle>
                <CorrectTitle>
                  Running projects from prospect to payment and everything in
                  between
                </CorrectTitle>
                <CorrectTitle>
                  A single source of truth for all your financial data, leads,
                  budgets, and team communication
                </CorrectTitle>
                <CorrectTitle>Wide range of customizable reports</CorrectTitle>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[15px] flex justify-center relative">
          <Image
            src="/assets/advantage.svg"
            alt="Advantage"
            width={440}
            height={274}
          />
          <Image
            src="/assets/reverseArrow.svg"
            alt="→"
            width={144}
            height={140}
            className="absolute left-[70%] top-6 hidden lg:block"
          />
        </div>
      </div>
    </ContentLayout>
  );
};

const CrossTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="w-[36px] h-[36px] relative flex items-center justify-center">
        <Image
          src="/assets/notsupport.svg"
          alt="#"
          width={36}
          height={36}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <h4 className="leading-[120%]">{children}</h4>
    </div>
  );
};

const CorrectTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="w-[36px] h-[36px] relative flex items-center justify-center">
        <Image
          src="/assets/supported.svg"
          fill
          alt="#"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <h4 className="leading-[120%] flex-1">{children}</h4>
    </div>
  );
};
