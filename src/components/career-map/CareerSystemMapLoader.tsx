"use client";

import dynamic from "next/dynamic";

const CareerSystemMap = dynamic(
  () =>
    import("./CareerSystemMap").then((mod) => mod.CareerSystemMap),
  { ssr: false }
);

export function CareerSystemMapLoader() {
  return <CareerSystemMap />;
}
