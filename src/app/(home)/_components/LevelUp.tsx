import React from "react";
import Image from "next/image";

export const LevelUpSection = () => {
  return (
    <div
      className="py-8"
      style={{
        background:
          "linear-gradient(182.2deg, #FFFFFF 1.9%, #F4F4F4 16.34%, #F4F4F4 50.05%, #F4F4F4 83.75%, #FFFFFF 98.2%)",
      }}>
      <div className="flex flex-col">
        <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
          Level up your&nbsp;
          <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
            quality&nbsp;
          </span>
          of work
        </h1>
        <h2 className="px-[50px] text-center mt-4 text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit
          bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus
          purus semper penatibus sit quis. Morbi amet gravida scelerisque proin
          amet morbi.
        </h2>
      </div>
      <div className="relative">
        <div className="absolute -translate-y-[50%] left-0 top-[50%] ">
          <Image
            src="/assets/levelupdeco.svg"
            alt="+++"
            width={656}
            height={354}
            style={{ filter: "grayscale(1)" }}
          />
        </div>
        <div className="absolute -translate-y-[50%] right-0 top-[50%] ">
          <Image
            src="/assets/levelupdecoRight.svg"
            alt="+++"
            width={656}
            height={354}
            style={{ filter: "grayscale(1)" }}
          />
        </div>
        <div className="relative z-10 mt-[50px] flex justify-center w-[80%] lg:w-[970px] h-[300px] lg:h-[560px] mx-auto rounded-[20px] bg-light shadow-[0px_10px_25px_-3px_#00000026] overflow-hidden">
          <Image
            src="/assets/levelupback.svg"
            alt="back"
            width={814}
            height={322}
            className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] hidden lg:block "
          />
          <Image
            src="/assets/levelup.svg"
            alt="play"
            width={409}
            height={162}
            className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] w-[80%] lg:w-full"
          />
          <button className="absolute left-[50%] -translate-x-[50%] bottom-[40px] z-20">
            <Image
              src="/assets/playbtn.svg"
              alt="Play"
              width={70}
              height={70}
              className="z-10"
            />
          </button>
        </div>
      </div>
      <div className="mt-[30px] flex">
        <div className="text-lg mx-auto leading-[120%] font-medium relative text-mild-dark">
          Click To Play The Video
          <Image
            src="/assets/arrowup.svg"
            alt="UpArrow"
            width={79}
            height={133}
            className="absolute bottom-2 right-0 translate-x-[60%] z-20"
          />
        </div>
      </div>
    </div>
  );
};
