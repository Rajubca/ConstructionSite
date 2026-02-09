'use client'

import { createProject } from "@/app/actions"
import { Button } from "@/components/ui/Button"
import { ImageUpload } from "@/components/ui/ImageUpload"
import { useFormState } from "react-dom"

const initialState = {
  message: '',
}

export function ProjectForm() {

  const [state, dispatch] = useFormState(createProject, initialState)

  return (
    <form action={dispatch} className="space-y-6">
      {state?.message && <div className="text-red-500 text-sm font-medium">{state.message}</div>}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Title</label>
          <input name="title" type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" required placeholder="Project Name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Description</label>
          <input name="description" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" required placeholder="Project description..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Category</label>
          <select name="category" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none bg-white">
            <option value="Construction">Construction</option>
            <option value="Demolition">Demolition</option>
            <option value="Plaster">Plaster</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Civil">Civil</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Video URL (Optional)</label>
          <input name="videoUrl" type="url" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="https://youtube.com/..." />
        </div>
      </div>
      <ImageUpload name="imageUrl" label="Project Image (Optional if Video provided)" />
      <Button>Add Project</Button>
    </form>
  )
}
