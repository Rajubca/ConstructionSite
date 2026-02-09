export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
          <p className="text-sm text-slate-400">
            Leading construction company in Anand, Gujarat. We provide comprehensive construction services including demolition, plaster, and plumbing.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <address className="text-sm not-italic space-y-2 text-slate-400">
            <p>C23, Gangdev Nagar</p>
            <p>Anand, Gujarat</p>
            <p className="mt-4 font-semibold text-amber-500">We work with material only.</p>
          </address>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="/services" className="hover:text-white">Our Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/login" className="hover:text-white mt-4 block text-xs opacity-50">Admin Login</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Anand Construction. All rights reserved.
      </div>
    </footer>
  )
}
