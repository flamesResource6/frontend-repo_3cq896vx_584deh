import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { ShoppingBag, Menu, X, Instagram, Twitter, Video } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `uppercase tracking-wide text-xs md:text-sm transition-colors ${
          isActive ? 'text-white' : 'text-gray-400 hover:text-white'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="font-extrabold tracking-[0.3em] text-white text-sm md:text-base">
              RESSURRECCION
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/shop">Shop</NavItem>
              <NavItem to="/lookbook">Lookbook</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/shop" className="relative group">
                <ShoppingBag className="w-5 h-5 text-white" />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] leading-none rounded-full px-1 py-0.5">{count}</span>
                )}
              </Link>
              <button className="md:hidden" onClick={() => setOpen(true)}>
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/95 p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-extrabold tracking-[0.3em] text-white">RESSURRECCION</span>
              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg">
              <NavLink to="/" onClick={() => setOpen(false)} className="text-white">Home</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className="text-white">About</NavLink>
              <NavLink to="/shop" onClick={() => setOpen(false)} className="text-white">Shop</NavLink>
              <NavLink to="/lookbook" onClick={() => setOpen(false)} className="text-white">Lookbook</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="text-white">Contact</NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ressurreccion. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white"><Video className="w-4 h-4" /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
