import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import './Cart.css'

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <section className="cart">
        <div className="cart__empty">
          <h2>Tu carrito está vacío</h2>
          <p>
            Aún no agregaste productos a tu ritual. Podés explorar la tienda,
            inspirarte con los rituales prearmados o visitar el Diario de Pausas.
          </p>
          <div className="cart__empty-actions">
            <Link to="/tienda" className="btn-primary">
              Ver tienda
            </Link>
            <Link to="/rituales" className="btn-secondary">
              Explorar rituales
            </Link>
            <Link to="/diario-de-pausas" className="btn-secondary">
              Diario de Pausas
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="cart">
      <h2>Tu carrito</h2>
      <p className="cart__subtitle">
        Revisá los productos que elegiste para tus pausas en casa antes de
        finalizar la compra.
      </p>

      <div className="cart__list">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart__summary">
        <p className="cart__total">Total: ${totalPrice}</p>
        <div className="cart__actions">
          <button className="btn-secondary" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn-primary">
            Finalizar compra
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cart
