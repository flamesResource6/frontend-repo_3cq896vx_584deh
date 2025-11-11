import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Lookbook from './components/Lookbook'
import About from './components/About'
import Contact from './components/Contact'
import { CartProvider, useCart } from './contexts/CartContext'

function HomePage() {
  const { addItem } = useCart()
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h3 className="text-white text-xl font-semibold mb-6 tracking-tight">Latest</h3>
        <ProductGrid onAdd={addItem} />
      </section>
      <Lookbook />
    </>
  )
}

function ShopPage() {
  const { addItem } = useCart()
  return <ProductGrid onAdd={addItem} />
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="lookbook" element={<Lookbook />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}
