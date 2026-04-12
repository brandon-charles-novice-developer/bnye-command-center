import { Hero } from "@/components/landing/Hero";
import { ProjectGrid } from "@/components/landing/ProjectGrid";
import { About } from "@/components/landing/About";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <About />
    </>
  );
}
