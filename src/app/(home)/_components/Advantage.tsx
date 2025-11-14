import { ContentLayout } from "@/components/common/common";
import Image from "next/image";

export const AdvantageSection = () => {
  return (
    <ContentLayout>
      <div className="p-[4.5rem]  shadow-[0px_10px_25px_-3px_#00000026] rounded-default z-50">
        <div className="text-center">
          <h1 className="text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
            Why Choose &nbsp;
            <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
              GrowNext?
            </span>
          </h1>
          <h2 className="text-center mt-[1rem] text-[20px] leading-[27px] text-secondary">
            GrowNext unites all your tools to simplify teamwork and improve
            visibility. Structured workflows make collaboration, task
            management, and communication easier, keeping your team focused and
            moving forward.
          </h2>
        </div>
        <div className="mt-[3rem] gap-[3rem] grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-gradient-to-b from-light-dark to-light rounded-default p-[30px] flex flex-col">
            <h3 className="text-[30px] leading-[36px] font-bold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
              Without GrowNext
            </h3>
            <div className="flex mt-[30px] gap-[25px] flex-col">
              <CrossTitle>
                Teams use multiple disconnected tools, causing confusion and
                delays.
              </CrossTitle>
              <CrossTitle>
                Tasks, projects, and communication are scattered, making
                tracking difficult.
              </CrossTitle>
              <CrossTitle>
                Collaboration lacks transparency, leading to missed deadlines
                and errors.
              </CrossTitle>
              <CrossTitle>
                Manual reporting and follow-ups consume time and reduce
                productivity.
              </CrossTitle>
            </div>
          </div>
          <div
            className="bg-light rounded-default p-[2px] flex flex-col bg-clip-content relative border-transparent shadow-[0px_10px_25px_-3px_#00000026]
                    before:content-[''] before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-dark before:to-light before:w-full before:h-full before:-z-10 before:rounded-default">
            <div className="p-[28px]">
              <h3 className="text-[30px] leading-[36px] font-bold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
                With GrowNext
              </h3>
              <div className="flex mt-[30px] gap-[25px] flex-col">
                <CorrectTitle>
                  All work is centralized in one unified workspace, saving time
                  and effort.
                </CorrectTitle>
                <CorrectTitle>
                  Tasks, projects, and communication are fully organized and
                  easily accessible.
                </CorrectTitle>
                <CorrectTitle>
                  Collaboration is transparent, streamlined, and keeps everyone
                  aligned.
                </CorrectTitle>
                <CorrectTitle>
                  Automated workflows and reporting improve efficiency and
                  productivity.
                </CorrectTitle>
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
            priority
          />
          <Image
            src="/assets/reverseArrow.svg"
            alt="→"
            width={144}
            height={140}
            priority
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
          fill
          className="absolute w-full h-full object-cover"
          priority
        />
      </div>
      <h4 className="leading-[120%] flex-1">{children}</h4>
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
          priority
          className="absolute w-full h-full object-cover"
        />
      </div>
      <h4 className="leading-[120%] flex-1">{children}</h4>
    </div>
  );
};
