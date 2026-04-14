import { Hero } from "@/components/landing/Hero";
import { ProjectGrid } from "@/components/landing/ProjectGrid";
import { About } from "@/components/landing/About";
import { CareerSystemMapLoader } from "@/components/career-map/CareerSystemMapLoader";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerSystemMapLoader />
      <ProjectGrid />
      <About />
    </>
  );
}
