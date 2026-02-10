"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[var(--secondary)] text-[var(--secondary-foreground)] py-16"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
            <span className="text-[var(--primary)]">Anand</span>Construction
          </Link>
          <p className="text-sm text-[var(--muted-foreground)] max-w-sm leading-relaxed">
            Building the future of Anand, Gujarat with precision and quality. Specializing in demolition, plastering, and plumbing services with a commitment to excellence.
          </p>
          <div className="mt-8 flex gap-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-[var(--background)]/10 hover:bg-[var(--primary)] transition-colors flex items-center justify-center cursor-pointer">
                <span className="text-xs text-white opacity-50">S{i}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--primary)] rounded-full"></span>
          </h3>
          <address className="text-sm not-italic space-y-4 text-[var(--muted-foreground)]">
            <p className="flex items-start gap-3">
              <span className="text-[var(--primary)] mt-1">•</span>
              <span>C23, Gangdev Nagar<br/>Anand, Gujarat</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[var(--primary)]">•</span>
              <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[var(--primary)]">•</span>
              <a href="mailto:info@anandconstruction.com" className="hover:text-white transition-colors">info@anandconstruction.com</a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--primary)] rounded-full"></span>
          </h3>
          <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-[var(--primary)] hover:translate-x-1 transition-all inline-block">
                  {item}
                </Link>
              </li>
            ))}
             <li><Link href="/login" className="hover:text-white mt-4 block text-xs opacity-30 hover:opacity-100 transition-opacity">Admin Login</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]/10 mt-16 pt-8 text-center text-xs text-[var(--muted-foreground)]">
        &copy; {new Date().getFullYear()} Anand Construction. All rights reserved.
      </div>
    </motion.footer>
  )
}
