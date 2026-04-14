"use client";

import dynamic from "next/dynamic";

const About = dynamic(
  () => import("./About").then((mod) => mod.About),
  { ssr: true }
);

export function AboutLoader() {
  return <About />;
}
