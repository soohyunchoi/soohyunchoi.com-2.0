'use client';
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CELL = 72;
const STROKE = 'rgba(152,145,132,0.2)';

interface Line {
  pos: number;    // px position along its axis
  dist: number;   // normalized 0–1, distance from center
  offset: number; // px displacement to start from (center)
}

export default function SectionGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: false });
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setSize({ w: width, h: height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const hLines: Line[] = [];
  const vLines: Line[] = [];

  if (size) {
    for (let y = 0; y <= size.h + CELL; y += CELL) {
      const dist = Math.min(Math.abs(y - size.h / 2) / (size.h / 2), 1);
      hLines.push({ pos: y, dist, offset: size.h / 2 - y });
    }
    for (let x = 0; x <= size.w + CELL; x += CELL) {
      const dist = Math.min(Math.abs(x - size.w / 2) / (size.w / 2), 1);
      vLines.push({ pos: x, dist, offset: size.w / 2 - x });
    }
  }

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {size && (
        <svg
          width={size.w}
          height={size.h}
          style={{ position: 'absolute', inset: 0 }}
        >
          {hLines.map((l, i) => (
            <Gridline key={`h${i}`} axis="h" line={l} length={size.w} isInView={isInView} />
          ))}
          {vLines.map((l, i) => (
            <Gridline key={`v${i}`} axis="v" line={l} length={size.h} isInView={isInView} />
          ))}
        </svg>
      )}
    </div>
  );
}

function Gridline({
  axis,
  line,
  length,
  isInView,
}: {
  axis: 'h' | 'v';
  line: Line;
  length: number;
  isInView: boolean;
}) {
  // Quadratic scaling: corners are much faster than center
  // Center (dist=0): stiffness=25, slow drift
  // Edge (dist=1): stiffness=305, fast snap with slight bounce
  const d2 = line.dist * line.dist;
  const stiffness = 25 + d2 * 280;
  // Edge lines are underdamped (springy), center lines are overdamped (smooth)
  const damping = 14 + line.dist * 4;

  const motionAxis = axis === 'h' ? 'y' : 'x';

  return (
    <motion.line
      {...(axis === 'h'
        ? { x1: 0, y1: line.pos, x2: length, y2: line.pos }
        : { x1: line.pos, y1: 0, x2: line.pos, y2: length })}
      stroke={STROKE}
      strokeWidth={1}
      initial={{ [motionAxis]: line.offset, opacity: 0 }}
      animate={
        isInView
          ? { [motionAxis]: 0, opacity: 1 }
          : { [motionAxis]: line.offset, opacity: 0 }
      }
      transition={{
        [motionAxis]: { type: 'spring', stiffness, damping },
        opacity: { duration: 0.25 },
      }}
    />
  );
}
