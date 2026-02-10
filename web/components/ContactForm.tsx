"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[var(--card)] p-8 border border-[var(--border)] rounded-xl shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/10 rounded-bl-full -mr-12 -mt-12" />

      <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Send us a message</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--muted-foreground)]">Name</label>
          <input
            type="text"
            className="w-full rounded-md border border-[var(--input)] bg-[var(--background)] p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all shadow-sm hover:shadow-md"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--muted-foreground)]">Phone</label>
          <input
            type="tel"
            className="w-full rounded-md border border-[var(--input)] bg-[var(--background)] p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all shadow-sm hover:shadow-md"
            placeholder="Your Phone Number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--muted-foreground)]">Message</label>
          <textarea
            rows={4}
            className="w-full rounded-md border border-[var(--input)] bg-[var(--background)] p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all shadow-sm hover:shadow-md resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <Button type="button" className="w-full h-12 text-lg font-bold tracking-wide shadow-md hover:shadow-lg transform active:scale-95 transition-all">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}
