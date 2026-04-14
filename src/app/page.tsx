import { Hero } from "@/components/landing/Hero";
import { ProjectGridLoader } from "@/components/landing/ProjectGridLoader";
import { CareerSystemMapLoader } from "@/components/career-map/CareerSystemMapLoader";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerSystemMapLoader />
      <ProjectGridLoader />
    </>
  );
}
