import React from "react";
import { BaseLayout } from "@/layout";
import { HeroSection } from "./_components/Hero";
import { FeaturesSection } from "./_components/Features";
import { AdvantageSection } from "./_components/Advantage";
import { LevelUpSection } from "./_components/LevelUp";
import { PlanSection } from "./_components/Plan";
import { SupportSection } from "./_components/Support";
import { TestimonialsSection } from "./_components/Testimonials";
import { TailoredSection } from "./_components/Tailored";

export default function HomePage() {
  return (
    <BaseLayout>
      <HeroSection />
      <section className="flex flex-col">
        <FeaturesSection />
        <AdvantageSection />
        <LevelUpSection />
        <PlanSection />
        <SupportSection />
        <TestimonialsSection />
        <TailoredSection />
      </section>
    </BaseLayout>
  );
}
