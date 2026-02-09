import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          <span className="text-amber-500">Anand</span>Construct
        </Link>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-amber-500 transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
