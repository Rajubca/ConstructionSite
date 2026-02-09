'use client'
import { useState } from 'react'

export function ImageUpload({ name, label }: { name: string, label: string }) {
  const [url, setUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.success) {
        setUrl(data.url)
      } else {
        alert('Upload failed')
      }
    } catch (err) {
      console.error(err)
      alert('Upload error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="flex flex-col gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer"
        />
        {uploading && <div className="text-xs text-amber-600 animate-pulse">Uploading image...</div>}
      </div>
      <input type="hidden" name={name} value={url} />
      {url && (
        <div className="mt-2 relative inline-block group">
           <img src={url} alt="Preview" className="h-32 w-auto rounded-lg border border-slate-200 shadow-sm" />
           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center text-white text-xs">Uploaded</div>
        </div>
      )}
    </div>
  )
}
