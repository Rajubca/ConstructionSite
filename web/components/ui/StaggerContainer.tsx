"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: any) => ({
    opacity: 1,
    transition: {
      delayChildren: custom?.delayChildren || 0.2,
      staggerChildren: custom?.staggerChildren || 0.1,
    },
  }),
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.2,
  staggerChildren = 0.1
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={{ delayChildren, staggerChildren }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
