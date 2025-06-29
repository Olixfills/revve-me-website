// components/animations/OverlaySection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const OverlaySection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)", "inset(0 0 100% 0)"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ clipPath }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};
