"use client";

import dynamic from "next/dynamic";

const ProjectGrid = dynamic(
  () => import("./ProjectGrid").then((mod) => mod.ProjectGrid),
  { ssr: true }
);

export function ProjectGridLoader() {
  return <ProjectGrid />;
}
