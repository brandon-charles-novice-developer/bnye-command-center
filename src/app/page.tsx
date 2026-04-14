import { Hero } from "@/components/landing/Hero";
import { ProjectGridLoader } from "@/components/landing/ProjectGridLoader";
import { AboutLoader } from "@/components/landing/AboutLoader";
import { CareerSystemMapLoader } from "@/components/career-map/CareerSystemMapLoader";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerSystemMapLoader />
      <ProjectGridLoader />
      <AboutLoader />
    </>
  );
}
