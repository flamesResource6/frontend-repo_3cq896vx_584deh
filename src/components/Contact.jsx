import React, { useState } from 'react'
import { Instagram, Twitter, Video } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thank you — we will be in touch soon.')
    e.currentTarget.reset()
  }

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-white text-3xl font-bold tracking-tight mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Name" className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30" />
        <input type="email" name="email" required placeholder="Email" className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30" />
        <textarea name="message" required placeholder="Message" rows="5" className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30" />
        <button type="submit" className="bg-white text-black px-6 py-3 uppercase tracking-wide text-sm">Send</button>
      </form>
      {status && <p className="text-gray-400 mt-4">{status}</p>}

      <div className="mt-10 flex items-center gap-4 text-gray-400">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white"><Video className="w-5 h-5" /></a>
        <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
      </div>
    </section>
  )
}
