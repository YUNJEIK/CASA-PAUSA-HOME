import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import './CartWidget.css'

const CartWidget = () => {
  const { totalItems } = useCart()

  if (totalItems === 0) return null

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-widget__icon">🛒</span>
      <span className="cart-widget__count">{totalItems}</span>
    </Link>
  )
}

export default CartWidget
