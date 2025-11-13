import React from "react";
import { BaseLayout } from "@/layout";

import { FeaturesSection } from "./_components/Features";
import { HeroSection } from "./_components/hero";

export default function HomePage() {
  return (
    <BaseLayout>
      <section className="flex flex-col mt-[60px] gap-y-[4.5rem]">
        <HeroSection />
        <FeaturesSection />
        <HeroSection />
      </section>
    </BaseLayout>
  );
}
