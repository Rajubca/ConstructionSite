'use client'

import { createService } from "@/app/actions"
import { Button } from "@/components/ui/Button"
import { ImageUpload } from "@/components/ui/ImageUpload"
import { useFormState } from "react-dom"

const initialState = {
  message: '',
}

export function ServiceForm() {
  const [state, dispatch] = useFormState(createService, initialState)

  return (
    <form action={dispatch} className="space-y-6">
      {state?.message && <div className="text-red-500 text-sm font-medium">{state.message}</div>}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Title</label>
          <input name="title" type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" required placeholder="e.g. Demolition" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Description</label>
          <input name="description" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" required placeholder="Service description..." />
        </div>
      </div>
      <ImageUpload name="imageUrl" label="Service Image" />
      <Button>Add Service</Button>
    </form>
  )
}
