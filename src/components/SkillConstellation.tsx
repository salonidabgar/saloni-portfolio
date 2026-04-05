"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface SkillNode {
  id: string;
  label: string;
  cluster: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface SkillEdge {
  source: string;
  target: string;
}

const SKILL_DATA: { id: string; label: string; cluster: string }[] = [
  // Embedded
  { id: "c", label: "C", cluster: "embedded" },
  { id: "cpp", label: "C++", cluster: "embedded" },
  { id: "freertos", label: "FreeRTOS", cluster: "embedded" },
  { id: "linux", label: "Linux", cluster: "embedded" },
  { id: "openssl", label: "OpenSSL", cluster: "embedded" },
  // Web
  { id: "ts", label: "TypeScript", cluster: "web" },
  { id: "react", label: "React", cluster: "web" },
  { id: "fastapi", label: "FastAPI", cluster: "web" },
  { id: "python", label: "Python", cluster: "web" },
  { id: "nodejs", label: "Node.js", cluster: "web" },
  // Infra
  { id: "docker", label: "Docker", cluster: "infra" },
  { id: "aws", label: "AWS", cluster: "infra" },
  { id: "postgres", label: "PostgreSQL", cluster: "infra" },
  { id: "redis", label: "Redis", cluster: "infra" },
  { id: "git", label: "Git", cluster: "infra" },
  // Blockchain
  { id: "solidity", label: "Solidity", cluster: "blockchain" },
  { id: "ethereum", label: "Ethereum", cluster: "blockchain" },
];

const EDGES: SkillEdge[] = [
  // Embedded cluster
  { source: "c", target: "cpp" },
  { source: "cpp", target: "freertos" },
  { source: "cpp", target: "openssl" },
  { source: "freertos", target: "linux" },
  { source: "c", target: "linux" },
  // Web cluster
  { source: "ts", target: "react" },
  { source: "python", target: "fastapi" },
  { source: "ts", target: "nodejs" },
  { source: "react", target: "nodejs" },
  // Infra cluster
  { source: "docker", target: "aws" },
  { source: "postgres", target: "redis" },
  { source: "docker", target: "postgres" },
  { source: "git", target: "docker" },
  // Blockchain cluster
  { source: "solidity", target: "ethereum" },
  // Cross-cluster
  { source: "cpp", target: "python" },
  { source: "fastapi", target: "postgres" },
  { source: "fastapi", target: "redis" },
  { source: "react", target: "docker" },
  { source: "nodejs", target: "docker" },
  { source: "solidity", target: "ts" },
  { source: "python", target: "docker" },
];

const CLUSTER_COLORS: Record<string, string> = {
  embedded: "#3d7a5a",
  web: "#d4a853",
  infra: "#8faa8b",
  blockchain: "#5a9e78",
};

const CLUSTER_LABELS: Record<string, string> = {
  embedded: "Embedded",
  web: "Web",
  infra: "Infrastructure",
  blockchain: "Blockchain",
};

// Deterministic initial positions based on cluster
const CLUSTER_CENTERS: Record<string, { x: number; y: number }> = {
  embedded: { x: 0.25, y: 0.3 },
  web: { x: 0.75, y: 0.3 },
  infra: { x: 0.25, y: 0.75 },
  blockchain: { x: 0.75, y: 0.75 },
};

export default function SkillConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const animRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const hoveredRef = useRef<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => setMounted(true), []);

  const initNodes = useCallback((width: number, height: number) => {
    const padding = 60;
    const nodes: SkillNode[] = SKILL_DATA.map((skill, i) => {
      const center = CLUSTER_CENTERS[skill.cluster];
      // Spread within cluster using deterministic offsets based on index
      const angle = (i * 2.399) % (Math.PI * 2); // golden angle
      const spread = 40 + (i % 3) * 25;
      return {
        ...skill,
        x: padding + center.x * (width - padding * 2) + Math.cos(angle) * spread,
        y: padding + center.y * (height - padding * 2) + Math.sin(angle) * spread,
        vx: 0,
        vy: 0,
        radius: skill.label.length > 6 ? 32 : 26,
      };
    });
    nodesRef.current = nodes;
  }, []);

  const simulate = useCallback((width: number, height: number) => {
    const nodes = nodesRef.current;
    const padding = 50;

    for (const node of nodes) {
      // Gentle drift toward cluster center
      const center = CLUSTER_CENTERS[node.cluster];
      const cx = padding + center.x * (width - padding * 2);
      const cy = padding + center.y * (height - padding * 2);
      node.vx += (cx - node.x) * 0.0003;
      node.vy += (cy - node.y) * 0.0003;

      // Repulsion from other nodes
      for (const other of nodes) {
        if (other.id === node.id) continue;
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const minDist = node.radius + other.radius + 20;
        if (dist < minDist) {
          const force = (minDist - dist) * 0.02;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }
      }

      // Mouse attraction on hover
      const mouse = mouseRef.current;
      if (mouse) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          node.vx += dx * 0.0005;
          node.vy += dy * 0.0005;
        }
      }

      // Damping
      node.vx *= 0.92;
      node.vy *= 0.92;

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounds
      node.x = Math.max(padding, Math.min(width - padding, node.x));
      node.y = Math.max(padding, Math.min(height - padding, node.y));
    }
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, width * dpr, height * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    const nodes = nodesRef.current;
    const hovered = hoveredRef.current;
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    // Find connected nodes if hovering
    const connectedIds = new Set<string>();
    if (hovered) {
      connectedIds.add(hovered);
      for (const edge of EDGES) {
        if (edge.source === hovered) connectedIds.add(edge.target);
        if (edge.target === hovered) connectedIds.add(edge.source);
      }
    }

    // Draw edges
    for (const edge of EDGES) {
      const source = nodeMap.get(edge.source);
      const target = nodeMap.get(edge.target);
      if (!source || !target) continue;

      const isHighlighted = hovered && connectedIds.has(edge.source) && connectedIds.has(edge.target);
      const dimmed = hovered && !isHighlighted;

      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.strokeStyle = isHighlighted
        ? `rgba(212, 168, 83, 0.4)`
        : dimmed
        ? `rgba(180, 175, 160, 0.03)`
        : `rgba(180, 175, 160, 0.08)`;
      ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
      ctx.stroke();
    }

    // Draw nodes
    for (const node of nodes) {
      const isHovered = node.id === hovered;
      const isConnected = connectedIds.has(node.id);
      const dimmed = hovered && !isConnected;
      const color = CLUSTER_COLORS[node.cluster];

      // Glow for hovered
      if (isHovered) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(node.x, node.y, node.radius, node.x, node.y, node.radius + 8);
        glow.addColorStop(0, `${color}33`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = dimmed ? "rgba(20, 20, 19, 0.6)" : isHovered ? `${color}30` : "rgba(20, 20, 19, 0.8)";
      ctx.fill();
      ctx.strokeStyle = dimmed ? "rgba(180, 175, 160, 0.05)" : isConnected ? `${color}88` : "rgba(180, 175, 160, 0.12)";
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      // Label
      ctx.fillStyle = dimmed ? "rgba(180, 175, 160, 0.2)" : isConnected ? "#f5f0eb" : "rgba(180, 175, 160, 0.7)";
      ctx.font = `${isHovered ? "600" : "500"} 11px "DM Sans", system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x, node.y);
    }

    ctx.restore();
  }, []);

  useEffect(() => {
    if (!mounted || !isInView) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      if (nodesRef.current.length === 0) {
        initNodes(rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = { x, y };

      // Hit test
      let found: string | null = null;
      for (const node of nodesRef.current) {
        const dx = x - node.x;
        const dy = y - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius + 4) {
          found = node.id;
          break;
        }
      }
      hoveredRef.current = found;
      setHoveredSkill(found);
      canvas.style.cursor = found ? "pointer" : "default";
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
      hoveredRef.current = null;
      setHoveredSkill(null);
      canvas.style.cursor = "default";
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const loop = () => {
      const rect = container.getBoundingClientRect();
      simulate(rect.width, rect.height);
      draw(ctx, rect.width, rect.height);
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted, isInView, initNodes, simulate, draw]);

  // Cluster legend
  const hoveredCluster = hoveredSkill
    ? SKILL_DATA.find((s) => s.id === hoveredSkill)?.cluster
    : null;

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px]">
      {!mounted ? (
        <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-sm">
          Loading constellation...
        </div>
      ) : (
        <>
          <canvas ref={canvasRef} className="w-full h-full" />

          {/* Cluster legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 left-4 flex flex-wrap gap-3"
          >
            {Object.entries(CLUSTER_LABELS).map(([key, label]) => (
              <div
                key={key}
                className={`flex items-center gap-1.5 text-[11px] transition-opacity duration-300 ${
                  hoveredCluster && hoveredCluster !== key ? "opacity-30" : "opacity-100"
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: CLUSTER_COLORS[key] }}
                />
                <span className="text-[var(--muted)]">{label}</span>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
