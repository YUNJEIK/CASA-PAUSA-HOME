import { useCart } from '../../context/CartContext.jsx'
import './CartItem.css'

const CartItem = ({ item }) => {
  const { removeItem } = useCart()

  return (
    <article className="cart-item">
      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
      </div>
      <button className="cart-item__remove" onClick={() => removeItem(item.id)}>
        Quitar
      </button>
    </article>
  )
}

export default CartItem
