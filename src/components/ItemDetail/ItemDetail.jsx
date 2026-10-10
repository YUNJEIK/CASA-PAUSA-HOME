import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setAdded(true)
  }

  const searchParams = new URLSearchParams(location.search)
  const fromCategory = searchParams.get('fromCategory')

  const categoryLabels = {
    velas: 'Velas',
    textiles: 'Textiles',
    ceramica: 'Cerámica',
    objetos: 'Objetos',
    set: 'Set',
  }

  const handleBack = () => {
    navigate(-1)
  }

  const categoryLabel =
    categoryLabels[product.category] || product.category || 'Producto'

  return (
    <article className="detail">
      <div className="detail__top-bar">
        <button className="detail__back-button" onClick={handleBack}>
          ← Volver
        </button>

        {fromCategory ? (
          <Link to={`/category/${fromCategory}`} className="detail__breadcrumb">
            {categoryLabels[fromCategory] || fromCategory} / {product.name}
          </Link>
        ) : (
          <Link to="/tienda" className="detail__breadcrumb">
            Tienda / {product.name}
          </Link>
        )}
      </div>

      <div className="detail__content">
        <div className="detail__image-wrapper">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="detail__image-placeholder" />
          )}
        </div>

        <div className="detail__info">
          <p className="detail__category">{categoryLabel}</p>
          <h2>{product.name}</h2>
          <p className="detail__description">{product.description}</p>

          {product.price && (
            <p className="detail__price">${product.price}</p>
          )}

          {product.stock === 0 && (
            <p className="detail__stock detail__stock--out">
              Producto sin stock
            </p>
          )}

          {product.stock > 0 && (
            <>
              <p className="detail__stock">
                Stock disponible: {product.stock}
              </p>
              {!added ? (
                <ItemCount initial={1} stock={product.stock} onAdd={handleAdd} />
              ) : (
                <div className="detail__after-add">
                  <Link to="/cart" className="btn-primary">
                    Ir al carrito
                  </Link>
                  {fromCategory ? (
                    <Link
                      to={`/category/${fromCategory}`}
                      className="btn-secondary"
                    >
                      Volver a {categoryLabels[fromCategory] || fromCategory}
                    </Link>
                  ) : (
                    <Link to="/tienda" className="btn-secondary">
                      Seguir comprando
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default ItemDetail
