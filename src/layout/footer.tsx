"use client";

import { ContentLayout } from "@/components/common/common";
import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Footer = () => {
  const menus1 = [
    { name: "About Us", path: "/about-us" },
    { name: "Pricing", path: "/pricing" },
    { name: "Features", path: "/features" },
    { name: "Integrations", path: "/integrations" },
    { name: "Contact", path: "/contact" },
  ];

  const menus2 = [
    { name: "Login", path: "https://dashboard.grownext.app/login" },
    { name: "Register", path: "https://dashboard.grownext.app/register" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
  ];

  const menus3 = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Site Map", path: "/site-map" },
  ];

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContentLayout className="relative">
      {/* <Divider /> */}
      <div className="pb-[4.5rem]">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="rounded-default p-5 flex gap-[1.5rem] flex-col bg-gradient-to-b from-border to-light w-full lg:w-[465px] relative">
            <Image
              src="/assets/contact-database.svg"
              alt="database"
              width={144}
              height={144}
              className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
            <div className="text-primary text-[20px] leading-[120%] font-bold uppercase z-10">
              Your privacy is our responsibility
            </div>
            <div className="text-secondary leading-[23px] z-10">
              We believe that trust is paramount in a relationship. We do not
              own or sell your data, and we most certainly do not bank on
              advertising-based business models. The only way we make money is
              from the software license fees you pay us.
            </div>
            <button className="bg-gradient-to-b from-secondary to-primary gap-2.5 px-[16px] py-[8px] rounded-default flex mr-auto items-center z-10">
              <Image src="/assets/playbtn.png" alt=">" width={20} height={20} />
              <div className="font-medium text-light">Watch Video</div>
            </button>
          </div>
          <div className="flex justify-between flex-col lg:flex-row gap-x-0 gap-y-4 lg:gap-[69px] mt-5 mx-5 lg:mx-0">
            <div className="flex justify-between gap-x-0 gap-y-4 lg:gap-[69px]">
              <Section menus={menus1}>COMPANY</Section>
              <Section menus={menus2}>RESOURCES</Section>
              <Section menus={menus3}>SECURITY</Section>
            </div>
            <div className="flex flex-row lg:flex-col gap-2.5">
              <a
                href=""
                className="rounded-default bg-light-dark w-[30px] h-[30px] full-center">
                <Image
                  src="/assets/linkedin.png"
                  alt="Li"
                  width={15}
                  height={15}
                />
              </a>
              <a
                href=""
                className="rounded-default bg-light-dark w-[30px] h-[30px] full-center">
                <Image src="/assets/X.png" alt="Li" width={15} height={15} />
              </a>
              <a
                href=""
                className="rounded-default bg-light-dark w-[30px] h-[30px] full-center">
                <Image
                  src="/assets/facebook.png"
                  alt="Li"
                  width={15}
                  height={15}
                />
              </a>
              <a
                href=""
                className="rounded-default bg-light-dark w-[30px] h-[30px] full-center">
                <Image
                  src="/assets/instagram.png"
                  alt="Li"
                  width={15}
                  height={15}
                />
              </a>
              <a
                href=""
                className="rounded-default bg-light-dark w-[30px] h-[30px] full-center">
                <Image
                  src="/assets/youtube.png"
                  alt="Li"
                  width={15}
                  height={15}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-between items-center gap-y-4 mt-6 lg:mt-14 flex-col lg:flex-row">
          <div className="flex gap-2.5">
            <button className="hover:scale-105">
              <Image
                src="/assets/googleplay.png"
                alt="GooglePlay"
                width={175}
                height={60}
                className="w-auto h-[30px] aspect-auto"
              />
            </button>
            <button className="hover:scale-105">
              <Image
                src="/assets/appstore.png"
                alt="AppStore"
                width={175}
                height={60}
                className="w-auto h-[30px] aspect-auto"
              />
            </button>
            <button className="hover:scale-105">
              <Image
                src="/assets/microsoft.png"
                alt="Microsoft"
                width={175}
                height={60}
                className="w-auto h-[30px] aspect-auto"
              />
            </button>
            <button className="hover:scale-105">
              <Image
                src="/assets/macapp.png"
                alt="MacApp"
                width={175}
                height={60}
                className="w-auto h-[30px] aspect-auto"
              />
            </button>
            <button className="hover:scale-105">
              <Image
                src="/assets/linux.png"
                alt="Linux"
                width={175}
                height={60}
                className="w-auto h-[30px] aspect-auto"
              />
            </button>
          </div>

          <div className="text-[16px] md:text-[18px] lg:text-[20px] leading-[35px] text-secondary-dark flex items-center gap-1">
            <Copyright size={22} /> {new Date().getFullYear()} GrowNext. Manage
            cookies Legal Privacy
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="absolute bottom-16 w-[50px] h-[50px] -right-10 translate-x-[100%] bg-gradient-to-b from-mild to-dark shadow-[0px_10px_25px_-3px_#00000026] rounded-full flex justify-center items-end">
          <Image src="/assets/uparrow.png" alt="↑" width={20} height={35} />
        </button>
      )}
    </ContentLayout>
  );
};

const Section = ({
  children,
  menus,
}: {
  children: React.ReactNode;
  menus: { name: string; path: string }[];
}) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[20px] leading-[120%] font-medium from-secondary to-primary bg-gradient-to-b bg-clip-text text-transparent">
        {children}
      </div>
      <div className="flex flex-col">
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={` hover:text-primary text-lg leading-[35px] ${
              pathname === menu.path ? "text-primary" : "text-secondary"
            }`}>
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

// const Divider = () => {
//   return (
//     <div className="flex items-center my-[3rem]">
//       <div className="h-[1px] w-full flex-1 bg-gradient-to-l from-dark to-light" />
//       <div className="flex gap-[13px] items-center">
//         <div className="w-2.5 h-2.5 rounded-full bg-dot-gradient" />
//         {/* <div className="flex gap-[5px]">
//           <div className="w-[30px] h-[30px]">
//             <Image src="/assets/star.png" alt="*" width={60} height={60} />
//           </div>
//           <div className="w-[30px] h-[30px]">
//             <Image src="/assets/star.png" alt="*" width={60} height={60} />
//           </div>
//           <div className="w-[30px] h-[30px]">
//             <Image src="/assets/star.png" alt="*" width={60} height={60} />
//           </div>
//           <div className="w-[30px] h-[30px]">
//             <Image src="/assets/star.png" alt="*" width={60} height={60} />
//           </div>
//           <div className="w-[30px] h-[30px]">
//             <Image src="/assets/star.png" alt="*" width={60} height={60} />
//           </div>
//         </div> */}
//         <div className="w-2.5 h-2.5 rounded-full bg-dot-gradient" />
//       </div>
//       <div className="h-[1px] w-full flex-1 bg-gradient-to-r from-dark to-light" />
//     </div>
//   );
// };
