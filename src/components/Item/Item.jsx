import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
  const categoryLabels = {
    velas: 'Velas',
    textiles: 'Textiles',
    ceramica: 'Cerámica',
    objetos: 'Objetos',
    set: 'Set',
  }

  const categoryLabel =
    categoryLabels[product.category] || product.category || 'Producto'

  return (
    <article className="item-card">
      <div className="item-card__image-wrapper">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="item-card__image-placeholder">
            <span>Casa Pausa Home</span>
          </div>
        )}
      </div>

      <div className="item-card__content">
        <p className="item-card__category">{categoryLabel}</p>
        <h3>{product.name}</h3>

        {product.description && (
          <p className="item-card__text">
            {product.description.length > 80
              ? product.description.slice(0, 80) + '…'
              : product.description}
          </p>
        )}

        {product.price && (
          <p className="item-card__price">${product.price}</p>
        )}

        <Link
          to={
            product.category
              ? `/item/${product.id}?fromCategory=${product.category}`
              : `/item/${product.id}`
          }
          className="item-card__link"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default Item
