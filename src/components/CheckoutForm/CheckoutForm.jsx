import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'
import { useCart } from '../../context/CartContext.jsx'
import './CheckoutForm.css'

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart()
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!buyer.name || !buyer.email || !buyer.phone) return

    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
      createdAt: serverTimestamp(),
    }

    try {
      setLoading(true)
      const ordersRef = collection(db, 'orders')
      const docRef = await addDoc(ordersRef, order)
      setOrderId(docRef.id)
      clearCart()
    } catch (error) {
      console.error('Error creando la orden', error)
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <section className="checkout">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <p className="checkout__order-id">{orderId}</p>
      </section>
    )
  }

  if (cart.length === 0 && !loading) {
    return (
      <section className="checkout">
        <p>No tenés productos en el carrito.</p>
      </section>
    )
  }

  return (
    <section className="checkout">
      <h2>Datos para completar tu compra</h2>
      <form className="checkout__form" onSubmit={handleSubmit}>
        <label>
          Nombre completo
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Teléfono
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </section>
  )
}

export default CheckoutForm