import React from 'react'
import { motion } from 'framer-motion'

const products = [
  { id: 'tee-1', title: 'Monochrome Tee', price: 60, category: 'T-shirt', image: 'https://images.unsplash.com/photo-1541257710737-06d667133a53?q=80&w=1600&auto=format&fit=crop' },
  { id: 'outer-1', title: 'Urban Shell Jacket', price: 220, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1626759292870-5813c8c647c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwVGVlfGVufDB8MHx8fDE3NjI4MjQxMjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'pants-1', title: 'Tactical Cargo', price: 140, category: 'Pants', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop' },
  { id: 'acc-1', title: 'Minimalist Cap', price: 40, category: 'Accessories', image: 'https://images.unsplash.com/photo-1626759292870-5813c8c647c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwVGVlfGVufDB8MHx8fDE3NjI4MjQxMjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'tee-2', title: 'Boxy Logo Tee', price: 65, category: 'T-shirt', image: 'https://images.unsplash.com/photo-1626759292870-5813c8c647c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwVGVlfGVufDB8MHx8fDE3NjI4MjQxMjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'outer-2', title: 'Wool Overcoat', price: 320, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1626759292870-5813c8c647c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwVGVlfGVufDB8MHx8fDE3NjI4MjQxMjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'pants-2', title: 'Relaxed Pleat Trouser', price: 180, category: 'Pants', image: 'https://images.unsplash.com/photo-1589258603808-5381eeb16b94?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVcmJhbiUyMFNoZWxsJTIwSmFja2V0fGVufDB8MHx8fDE3NjI4MjQxMjl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'acc-2', title: 'Leather Cardholder', price: 95, category: 'Accessories', image: 'https://images.unsplash.com/photo-1729698473980-6552c6868fb2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWN0aWNhbCUyMENhcmdvfGVufDB8MHx8fDE3NjI4MjQxMzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
]

export default function ProductGrid({ onAdd }) {
  const categories = ['All', 'T-shirt', 'Outerwear', 'Pants', 'Accessories']
  const [active, setActive] = React.useState('All')

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Shop</h2>
        <div className="flex gap-3 overflow-x-auto">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 uppercase text-xs tracking-wide rounded-full border transition ${active===c? 'bg-white text-black border-white':'border-white/20 text-gray-400 hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((p, idx) => (
          <motion.div key={p.id} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx*0.03}} className="group relative bg-neutral-900">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">{p.title}</p>
                <p className="text-xs text-gray-400">{p.category}</p>
              </div>
              <p className="text-white text-sm">${p.price}</p>
            </div>
            <button onClick={() => onAdd?.(p)} className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition bg-white text-black uppercase tracking-wide text-xs py-2">Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
