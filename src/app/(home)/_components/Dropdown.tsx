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
    <div className="flex pt-5 pe-[13.29px] pb-[5px] bg-light shadow-[0px_10px_25px_-3px_#00000026] rounded-default flex-col w-[330px] me-3">
      <div className="h-[24px] mb-4 relative w-full">
        <div className="text-[24px] ms-[19px] font-semibold absolute top-[50%] left-0 translate-y-[-50%]">
          Features
        </div>
      </div>
      <div className="flex ps-2.5 flex-col">
        <button
          className="border-t border-b border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(1)}>
          <div className="flex gap-2 items-center">
            <Image
              src="../assets/union.svg"
              alt="union"
              width={20}
              height={20}
            />
            <div className="text-[20px] font-semibold">Collaboration</div>
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
          <div className="mx-auto py-4">
            <div>
              <ul className="list-disc text-[20px] lh-[30px] ms-8">
                <li className="cursor-pointer">Tasks</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Gantt chart</li>
                <li className="cursor-pointer">Kanban board</li>
                <li className="cursor-pointer">Time tracking</li>
                <li className="cursor-pointer">Task & project templates</li>
              </ul>
            </div>
          </div>
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
            />
            <div className="text-[20px] font-semibold">Task & Projects</div>
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
          <div className="mx-auto py-4">
            <div>
              <ul className="list-disc text-[20px] lh-[30px] ms-8">
                <li className="cursor-pointer">Tasks</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Gantt chart</li>
                <li className="cursor-pointer">Kanban board</li>
                <li className="cursor-pointer">Time tracking</li>
                <li className="cursor-pointer">Task & project templates</li>
              </ul>
            </div>
          </div>
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
            />
            <div className="text-[20px] font-semibold">Sites & Stores</div>
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
          <div className="mx-auto py-4">
            <div>
              <ul className="list-disc text-[20px] lh-[30px] ms-8">
                <li className="cursor-pointer">Tasks</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Gantt chart</li>
                <li className="cursor-pointer">Kanban board</li>
                <li className="cursor-pointer">Time tracking</li>
                <li className="cursor-pointer">Task & project templates</li>
              </ul>
            </div>
          </div>
        )}
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(4)}>
          <div className="flex gap-2 items-center">
            <Image src="../assets/hr.svg" alt="union" width={20} height={20} />
            <div className="text-[20px] font-semibold">HR & Automation</div>
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
          <div className="mx-auto py-4">
            <div>
              <ul className="list-disc text-[20px] lh-[30px] ms-8">
                <li className="cursor-pointer">Tasks</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Gantt chart</li>
                <li className="cursor-pointer">Kanban board</li>
                <li className="cursor-pointer">Time tracking</li>
                <li className="cursor-pointer">Task & project templates</li>
              </ul>
            </div>
          </div>
        )}
        <button
          className="border-t border-border ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(5)}>
          <div className="flex gap-2 items-center">
            <Image src="../assets/cms.svg" alt="union" width={20} height={20} />
            <div className="text-[20px] font-semibold">CMS</div>
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
          <div className="mx-auto py-4">
            <div>
              <ul className="list-disc text-[20px] lh-[30px] ms-8">
                <li className="cursor-pointer">Tasks</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Gantt chart</li>
                <li className="cursor-pointer">Kanban board</li>
                <li className="cursor-pointer">Time tracking</li>
                <li className="cursor-pointer">Task & project templates</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
