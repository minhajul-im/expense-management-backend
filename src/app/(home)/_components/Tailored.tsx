import { ContentLayout } from "@/components/common/common";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const TailoredSection = () => {
  return (
    <section className="bg-custom-gradient">
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
              <Link href="https://dashboard.grownext.app/register">
                <Button>Start For Free</Button>
              </Link>

              <Link href="https://dashboard.grownext.app/register">
                <Button size="outline"> Schedule a Demo</Button>
              </Link>
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
    </section>
  );
};
