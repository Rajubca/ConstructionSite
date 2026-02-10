"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerContainer, itemVariants } from "@/components/ui/StaggerContainer";
import { ArrowRight, Hammer } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
}

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
          {service.imageUrl ? (
            <div className="h-48 overflow-hidden relative">
              <motion.img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <span className="text-white font-bold text-lg flex items-center gap-2">
                   <Hammer className="w-5 h-5 text-[var(--primary)]" /> View Details
                 </span>
              </div>
            </div>
          ) : (
            <div className="h-48 bg-[var(--muted)] flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent" />
               <span className="text-6xl font-black text-[var(--primary)]/20">{index + 1}</span>
            </div>
          )}

          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed line-clamp-3 flex-grow">{service.description}</p>

            <Link href="/services" className="inline-flex items-center gap-2 text-[var(--foreground)] font-semibold group-hover:gap-4 transition-all mt-auto pt-4 border-t border-[var(--border)]">
              Learn more <ArrowRight className="w-4 h-4 text-[var(--primary)]" />
            </Link>
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  );
}
