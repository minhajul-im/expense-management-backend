"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const FeatureDropdown = ({
  submenu,
  onChange,
}: {
  submenu: number;
  onChange: (i: number) => void;
}) => {
  const toggleSubmenu = (i: number) => {
    if (submenu != i) onChange(i);
  };

  return (
    <div className="flex pt-5 pe-[13.29px] pb-[5px] bg-light shadow-lg rounded-default flex-col w-[330px] me-3 ">
      <div className="h-[24px] mb-4 relative w-full">
        <div className="text-[24px] ms-[19px] font-semibold absolute top-[50%] left-0 translate-y-[-50%]">
          Features
        </div>
      </div>
      <div className="flex ps-2.5 flex-col">
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(1)}>
          <div className="flex gap-2 items-center">
            <Image
              src="../assets/union.svg"
              alt="union"
              width={20}
              height={20}
              priority
            />
            <div className="text-[20px] font-semibold">
              Tasks & Collaboration
            </div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <ChevronRight
              className={`m-auto transition-transform duration-300 ease-in-out ${
                submenu === 1 ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {submenu == 1 && (
          <LayoutFeature>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Tasks</li>
            <li className="cursor-pointer">Wiki</li>
            <li className="cursor-pointer">Files</li>
            <li className="cursor-pointer">Chats</li>
            <li className="cursor-pointer">Meetings</li>
          </LayoutFeature>
        )}
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(2)}>
          <div className="flex gap-2 items-center">
            <Image
              src="../assets/note.svg"
              alt="union"
              width={20}
              height={20}
              priority
            />
            <div className="text-[20px] font-semibold">Human Resources</div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <ChevronRight
              className={`m-auto transition-transform duration-300 ease-in-out ${
                submenu === 2 ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {submenu == 2 && (
          <LayoutFeature>
            <li className="cursor-pointer">Employees</li>
            <li className="cursor-pointer">Recruitment</li>
            <li className="cursor-pointer">Job posting</li>
            <li className="cursor-pointer">Time off</li>
            <li className="cursor-pointer">Payroll & Appraisals</li>
            <li className="cursor-pointer">Productivity monitoring</li>
          </LayoutFeature>
        )}
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(3)}>
          <div className="flex gap-2 items-center">
            <Image
              src="../assets/sites.svg"
              alt="union"
              width={20}
              height={20}
              priority
            />
            <div className="text-[20px] font-semibold">Sales</div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <ChevronRight
              className={`m-auto transition-transform duration-300 ease-in-out ${
                submenu === 3 ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {submenu == 3 && (
          <LayoutFeature>
            <li className="cursor-pointer">CRM</li>
            <li className="cursor-pointer">Marketing campaigns</li>
            <li className="cursor-pointer">Sign</li>
            <li className="cursor-pointer">Chatbot</li>
            <li className="cursor-pointer">Quotations</li>
            <li className="cursor-pointer">Targets</li>
          </LayoutFeature>
        )}
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(4)}>
          <div className="flex gap-2 items-center">
            <Image
              src="../assets/hr.svg"
              alt="union"
              width={20}
              height={20}
              priority
            />
            <div className="text-[20px] font-semibold">Finance</div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <ChevronRight
              className={`m-auto transition-transform duration-300 ease-in-out ${
                submenu === 4 ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {submenu == 4 && (
          <LayoutFeature>
            <li className="cursor-pointer">Accounting</li>
            <li className="cursor-pointer">Invoicing</li>
            <li className="cursor-pointer">Inventory</li>
            <li className="cursor-pointer">Expenses</li>
            <li className="cursor-pointer">Profit & Loss</li>
            <li className="cursor-pointer">Dedicated accountant</li>
          </LayoutFeature>
        )}
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(5)}>
          <div className="flex gap-2 items-center">
            <Image
              src="../assets/cms.svg"
              alt="union"
              width={20}
              height={20}
              priority
            />
            <div className="text-[20px] font-semibold">Website & Helpdesk</div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <ChevronRight
              className={`m-auto transition-transform duration-300 ease-in-out ${
                submenu === 5 ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {submenu == 5 && (
          <LayoutFeature>
            <li className="cursor-pointer">Informational website</li>
            <li className="cursor-pointer">Online store</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Marketing </li>
            <li className="cursor-pointer">Support tickets</li>
            <li className="cursor-pointer">Live chat</li>
          </LayoutFeature>
        )}
      </div>
    </div>
  );
};

const LayoutFeature = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pb-5">
      <ul className="list-disc text-[20px] lh-[30px] ms-[3.6rem]">
        {children}
      </ul>
    </div>
  );
};
