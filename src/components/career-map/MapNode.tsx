"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import type { MapNodeData } from "@/data/system-map";

/* ================================================================
   MapNode — Custom React Flow node with 4 visual treatments.
   No emojis. Identity comes from accent color, size, and glass
   weight. Core gets a conic gradient ring. Domains get a colored
   top-edge. Skills are minimal pills. Projects get glass + glow.
   ================================================================ */

const kindStyles: Record<
  MapNodeData["kind"],
  { width: number; padding: string; glassCls: string }
> = {
  core: { width: 190, padding: "22px 28px", glassCls: "glass-heavy" },
  domain: { width: 170, padding: "16px 20px", glassCls: "glass-medium" },
  skill: { width: 150, padding: "10px 16px", glassCls: "glass-light" },
  project: { width: 170, padding: "16px 20px", glassCls: "glass-medium" },
};

type MapNodeProps = NodeProps & { data: MapNodeData };

export function MapNode({ data }: MapNodeProps) {
  const { label, subtitle, kind, accentColor } = data;
  const style = kindStyles[kind];

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-0 !w-0 !h-0" />

      <motion.div
        className={`${style.glassCls} relative select-none`}
        style={{
          width: style.width,
          padding: style.padding,
          borderRadius: kind === "core" ? 16 : 12,
          borderColor: `color-mix(in srgb, ${accentColor} 25%, transparent)`,
          textAlign: "center",
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Core: conic gradient glow ring */}
        {kind === "core" && (
          <div
            className="absolute -inset-[2px] rounded-[18px] pointer-events-none"
            style={{
              background: `conic-gradient(from 0deg, ${accentColor}, var(--accent-cyan), var(--accent-purple), ${accentColor})`,
              opacity: 0.15,
              filter: "blur(8px)",
            }}
          />
        )}

        {/* Domain/project: colored top-edge accent line */}
        {(kind === "domain" || kind === "project") && (
          <div
            className="absolute top-0 left-[15%] right-[15%] h-[2px] pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              opacity: 0.6,
            }}
          />
        )}

        {/* Accent dot — small colored indicator before the label */}
        {kind !== "core" && (
          <div
            className="mx-auto mb-1.5 rounded-full"
            style={{
              width: kind === "skill" ? 4 : 6,
              height: kind === "skill" ? 4 : 6,
              backgroundColor: accentColor,
              boxShadow: `0 0 8px ${accentColor}`,
            }}
          />
        )}

        {/* Label */}
        <div
          className="font-semibold leading-tight"
          style={{
            fontSize:
              kind === "core"
                ? "var(--step-0)"
                : kind === "skill"
                  ? "var(--step--2)"
                  : "var(--step--1)",
            color: "var(--text-primary)",
            letterSpacing: kind === "core" ? "var(--tracking-heading)" : undefined,
          }}
        >
          {label}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            className="mt-1 leading-tight"
            style={{
              fontSize: "var(--step--2)",
              color: "var(--text-tertiary)",
            }}
          >
            {subtitle}
          </div>
        )}
      </motion.div>
    </>
  );
}
