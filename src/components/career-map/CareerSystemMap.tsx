"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  type NodeTypes,
  type EdgeTypes,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { AnimatePresence, motion } from "framer-motion";
import { MAP_NODES, MAP_EDGES } from "@/data/system-map";
import { MapNode } from "./MapNode";
import { AnimatedMapEdge } from "./AnimatedMapEdge";

/* ================================================================
   CareerSystemMap — Progressive boot animation component.
   ================================================================
   Boot sequence (5-8s, interruptible):
     1. Background grid fades in (0-0.5s)
     2. Core node appears with pulse (0.3-1s)
     3. Edges extend from core → domains materialize (1-2.5s)
     4. Edges extend to skills → skill nodes appear (2.5-4s)
     5. Edges extend to projects → project nodes appear (4-6s)
     6. Settled — interactive (6s+)

   IntersectionObserver triggers the boot only when visible.
   ================================================================ */

const nodeTypes: NodeTypes = { mapNode: MapNode };
const edgeTypes: EdgeTypes = { animatedMapEdge: AnimatedMapEdge };

// Boot timing: delay before each tier starts revealing (ms)
const BOOT_DELAYS = [300, 1000, 2500, 4000] as const;

function MapCanvas() {
  const [activeTier, setActiveTier] = useState(-1);
  const [hasBooted, setHasBooted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { fitView } = useReactFlow();

  // Start boot when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBooted) {
          setHasBooted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasBooted]);

  // Progress through boot tiers
  useEffect(() => {
    if (!hasBooted) return;

    const timers = BOOT_DELAYS.map((delay, tier) =>
      setTimeout(() => setActiveTier(tier), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [hasBooted]);

  // Fit view after all nodes are visible
  useEffect(() => {
    if (activeTier >= 3) {
      const timer = setTimeout(() => {
        fitView({ padding: 0.15, duration: 800 });
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeTier, fitView]);

  // Filter nodes and edges by active tier
  const visibleNodes = useMemo(
    () => MAP_NODES.filter((n) => n.data.bootTier <= activeTier),
    [activeTier]
  );

  const visibleEdges = useMemo(
    () =>
      MAP_EDGES.filter((e) => {
        const edgeTier = e.data?.bootTier ?? 0;
        return edgeTier <= activeTier;
      }),
    [activeTier]
  );

  // Skip animation — jump to fully loaded
  const handleSkip = useCallback(() => {
    setActiveTier(3);
    setHasBooted(true);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full" style={{ height: "min(80vh, 700px)" }}>
      {/* Section header */}
      <motion.div
        className="absolute top-0 left-0 z-10 px-6 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasBooted ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-primary mb-[var(--space-3xs)]">
          Career Architecture
        </p>
        <h2 className="text-[var(--step-2)] font-bold text-text-primary">
          System Map
        </h2>
      </motion.div>

      {/* Skip button — visible during boot, fades out after */}
      <AnimatePresence>
        {hasBooted && activeTier < 3 && (
          <motion.button
            onClick={handleSkip}
            className="absolute bottom-6 right-8 z-10 glass-button px-4 py-2 text-[var(--step--2)] text-text-tertiary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Skip animation →
          </motion.button>
        )}
      </AnimatePresence>

      {/* React Flow canvas */}
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasBooted ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <ReactFlow
          nodes={visibleNodes}
          edges={visibleEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.4}
          maxZoom={1.5}
          panOnDrag
          zoomOnScroll={false}
          zoomOnPinch
          preventScrolling={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={32}
            size={1}
            color="rgba(255, 255, 255, 0.04)"
          />
        </ReactFlow>
      </motion.div>
    </div>
  );
}

export function CareerSystemMap() {
  return (
    <section className="relative px-6 py-16 max-w-[1200px] mx-auto">
      <ReactFlowProvider>
        <MapCanvas />
      </ReactFlowProvider>
    </section>
  );
}
