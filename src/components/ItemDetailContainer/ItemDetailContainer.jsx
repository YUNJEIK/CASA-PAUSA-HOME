import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, 'products', id)
    getDoc(docRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() })
        } else {
          setProduct(null)
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="center-text">Cargando producto...</p>
  if (!product) return <p className="center-text">Producto no encontrado.</p>

  return (
    <section className="detail-container">
      <ItemDetail product={product} />
    </section>
  )
}

export default ItemDetailContainer
