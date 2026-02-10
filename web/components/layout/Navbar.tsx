"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        scrolled ? "bg-background/80 border-border py-2 shadow-sm" : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-1 group">
          <motion.span
            className="text-[var(--primary)]"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            Anand
          </motion.span>
          <span className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">Construction</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {[
            ['Home', '/'],
            ['Services', '/services'],
            ['Portfolio', '/portfolio'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="relative group text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-md font-semibold text-xs shadow-lg hover:shadow-xl transition-all"
            >
              Get Quote
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
