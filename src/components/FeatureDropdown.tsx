"use client";
import { BsChevronRight } from "react-icons/bs";
import React from "react";
import Image from "next/image";

const FeatureDropdown: React.FC<{
  submenu: number;
  onChange: (i: number) => void;
}> = ({ submenu, onChange }) => {
  const toggleSubmenu = (i: number) => {
    if (submenu != i) onChange(i);
  };

  return (
    <div className="flex pt-5 pe-[13.29px] pb-[5px] bg-white shadow-[0px_10px_25px_-3px_#00000026] rounded-[20px] flex-col w-[330px] me-3">
      <div className="h-[24px] mb-4 relative w-full">
        <div className="text-[24px] ms-[19px] font-semibold absolute top-[50%] left-0 translate-y-[-50%]">
          Features
        </div>
      </div>
      <div className="flex ps-2.5 flex-col">
        <button
          className="border-t border-b border-[#e9ebed] ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(1)}
        >
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
            <BsChevronRight className="m-auto rotate-90" />
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
          className="border-t border-[#e9ebed] ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(2)}
        >
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
            <BsChevronRight className="m-auto " />
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
          className="border-t border-[#e9ebed] ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(3)}
        >
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
            <BsChevronRight className="m-auto " />
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
          className="border-t border-[#e9ebed] ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(4)}
        >
          <div className="flex gap-2 items-center">
            <Image src="../assets/hr.svg" alt="union" width={20} height={20} />
            <div className="text-[20px] font-semibold">HR & Automation</div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <BsChevronRight className="m-auto " />
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
          className="border-t border-[#e9ebed] ps-2.5 py-3 pe-3 nav-center w-full"
          onClick={() => toggleSubmenu(5)}
        >
          <div className="flex gap-2 items-center">
            <Image src="../assets/cms.svg" alt="union" width={20} height={20} />
            <div className="text-[20px] font-semibold">CMS</div>
          </div>
          <div className="w-[18px] h-[18px] d-flex">
            <BsChevronRight className="m-auto " />
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

export default FeatureDropdown;
