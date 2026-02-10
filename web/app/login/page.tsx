import { signIn } from '@/auth'
import { SubmitButton } from '@/components/ui/SubmitButton'

export const metadata = {
  title: "Admin Login",
};

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-slate-100">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Admin Portal</h1>
        <form
          action={async (formData) => {
            "use server"
            await signIn("credentials", formData)
          }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="admin@example.com"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <SubmitButton className="w-full h-12 text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">Sign In</SubmitButton>
        </form>
      </div>
    </div>
  )
}
