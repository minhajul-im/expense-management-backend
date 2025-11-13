import React from "react";

interface ContentLayoutProps {
  children: React.ReactNode;
  className?: string;
}
export const ContentLayout = ({ children, className }: ContentLayoutProps) => {
  return (
    <div
      className={`w-[95%] xl:w-[1100px] 2xl:w-[1195px] mx-auto ${
        className ?? ""
      }`}>
      {children}
    </div>
  );
};
