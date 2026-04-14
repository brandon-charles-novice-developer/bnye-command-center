"use client";

import { BaseEdge, getStraightPath, type EdgeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import type { MapEdgeData } from "@/data/system-map";

/* ================================================================
   AnimatedMapEdge — straight edge with dash-draw animation.
   The edge "extends" from source to target during boot-up,
   simulating a circuit trace being drawn.
   ================================================================ */

type AnimatedMapEdgeProps = EdgeProps & { data?: MapEdgeData };

export function AnimatedMapEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
}: AnimatedMapEdgeProps) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  // Approximate path length for dash animation
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const pathLength = Math.sqrt(dx * dx + dy * dy);

  return (
    <>
      {/* Glow underlay */}
      <BaseEdge
        path={edgePath}
        style={{
          ...style,
          stroke: "rgba(61, 120, 255, 0.06)",
          strokeWidth: 6,
          filter: "blur(4px)",
        }}
      />
      {/* Main edge with draw animation */}
      <motion.path
        d={edgePath}
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.5}
        initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.33, 0.12, 0.15, 1.0], // --ease-vercel
        }}
      />
    </>
  );
}
