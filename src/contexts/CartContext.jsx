import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ress-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('ress-cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id))
  const decrement = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)))
  const increment = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)))
  const clear = () => setItems([])

  const total = useMemo(() => items.reduce((sum, p) => sum + p.price * p.qty, 0), [items])
  const count = useMemo(() => items.reduce((sum, p) => sum + p.qty, 0), [items])

  const value = { items, addItem, removeItem, decrement, increment, clear, total, count }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
