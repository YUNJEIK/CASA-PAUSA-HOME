import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(prev => prev + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
  }

  const handleAdd = () => {
    if (stock === 0) return
    onAdd(count)
  }

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button
        className="item-count__add"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount