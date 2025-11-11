import React from 'react'
import { motion } from 'framer-motion'

const shots = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521193089946-7aa29d1fe8f0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop'
]

export default function Lookbook() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Lookbook</h2>
        <p className="text-gray-400 mt-2">Cinematic street moments. Editorial mood.</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]
      *:mb-4">
        {shots.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt={`look-${i}`}
            className="w-full rounded-sm hover:opacity-90 transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          />
        ))}
      </div>
    </section>
  )
}
