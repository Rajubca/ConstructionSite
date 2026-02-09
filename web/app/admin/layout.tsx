import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { signOut } from "@/auth"
import { Button } from "@/components/ui/Button"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-8 text-amber-500 tracking-tight">Admin Dashboard</h2>
        <nav className="space-y-2 flex-1">
          <Link href="/admin" className="block px-4 py-2 rounded-md hover:bg-slate-800 hover:text-amber-500 transition-colors">Overview</Link>
          <Link href="/admin/services" className="block px-4 py-2 rounded-md hover:bg-slate-800 hover:text-amber-500 transition-colors">Manage Services</Link>
          <Link href="/admin/portfolio" className="block px-4 py-2 rounded-md hover:bg-slate-800 hover:text-amber-500 transition-colors">Manage Portfolio</Link>
          <Link href="/" className="block px-4 py-2 mt-8 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors border-t border-slate-700">Back to Site</Link>
        </nav>
        <div className="pt-4 border-t border-slate-800">
           <div className="text-xs text-slate-500 mb-2">Logged in as {session.user?.email}</div>
           <form action={async () => {
             "use server"
             await signOut()
           }}>
             <Button variant="outline" size="sm" className="w-full justify-start text-slate-300 hover:text-white border-slate-700 hover:bg-slate-800">Sign Out</Button>
           </form>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
