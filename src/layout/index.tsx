import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
