import React from "react";
import Image from "next/image";

export const LevelUpSection = () => {
  return (
    <section className="bg-custom-gradient py-[4.5rem]">
      <div className="flex flex-col">
        <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
          Level up with AI & automation
        </h1>
        <h2 className="px-[50px] text-center mt-[1rem] text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
          GrowNext provides a simple yet powerful platform built on the latest
          technologies. Backed by Google and Amazon Web Services, it is fast,
          reliable, secure, and AI and automation boost team productivity up to
          5×.
        </h2>
      </div>
      <div className="relative">
        <div className="absolute -translate-y-[50%] left-0 top-[50%] ">
          <Image
            src="/assets/levelupdeco.svg"
            alt="+++"
            width={656}
            height={354}
            priority
            className="grayscale"
          />
        </div>
        <div className="absolute -translate-y-[50%] right-0 top-[50%] ">
          <Image
            src="/assets/levelupdecoRight.svg"
            alt="+++"
            width={656}
            height={354}
            priority
            className="grayscale"
          />
        </div>
        <div className="relative z-10 mt-[50px] flex justify-center w-[80%] lg:w-[970px] h-[300px] lg:h-[560px] mx-auto rounded-default bg-light shadow-[0px_10px_25px_-3px_#00000026] overflow-hidden">
          <Image
            src="/assets/levelupback.svg"
            alt="back"
            width={814}
            height={322}
            priority
            className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] hidden lg:block "
          />
          <Image
            src="/assets/levelup.svg"
            alt="play"
            width={409}
            height={162}
            priority
            className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] w-[80%] lg:w-full"
          />
          <button className="absolute left-[50%] -translate-x-[50%] bottom-[40px] z-20">
            <Image
              src="/assets/playbtn.svg"
              alt="Play"
              width={70}
              height={70}
              priority
              className="z-10"
            />
          </button>
        </div>
      </div>
      <div className="mt-[3rem] flex">
        <div className="text-lg mx-auto leading-[120%] font-medium relative text-mild-dark">
          Click to play video
          <Image
            src="/assets/arrowup.svg"
            alt="UpArrow"
            width={79}
            height={133}
            className="absolute bottom-2 right-0 translate-x-[60%] z-20"
            priority
          />
        </div>
      </div>
    </section>
  );
};
