import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const productsRef = collection(db, 'products')
    let q

    if (categoryId) {
      q = query(productsRef, where('category', '==', categoryId))
    } else {
      q = productsRef
    }
    getDocs(q)
      .then(snapshot => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(docs)
      })
      .catch(err => {
        console.error('Error trayendo productos:', err)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) {
    return <p className="center-text">Cargando productos...</p>
  }

  if (products.length === 0) {
    return (
      <section className="list-container">
        <header className="list-container__header">
          <p className="list-container__eyebrow">Tienda</p>
          <h2 className="list-container__title">
            {categoryId ? 'Sin productos en esta categoría' : 'Sin productos aún'}
          </h2>
          <p className="list-container__subtitle">
            Todavía no hay productos cargados para esta sección. Pronto vas a
            encontrar piezas Casa Pausa Home curadas especialmente.
          </p>
        </header>
      </section>
    )
  }

  const titleFromCategory = () => {
    if (!categoryId) return greeting || 'Tienda Casa Pausa Home'
    const map = {
      velas: 'Velas',
      textiles: 'Textiles',
      ceramica: 'Cerámica',
      objetos: 'Objetos',
    }
    return map[categoryId] || categoryId
  }

  return (
    <section className="list-container">
      <header className="list-container__header">
        <p className="list-container__eyebrow">Tienda</p>
        <h2 className="list-container__title">{titleFromCategory()}</h2>
        <p className="list-container__subtitle">
          Una selección de {titleFromCategory().toLowerCase()} pensadas para
          acompañar tus rituales cotidianos. Cada pieza se integra de forma
          natural a tus pausas de casa.
        </p>
      </header>

      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer
