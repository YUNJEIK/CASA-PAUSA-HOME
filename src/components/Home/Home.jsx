import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <section className="home">
      <div className="home__hero">
        <div className="home__text">
          <p className="home__eyebrow">Rituales para casa</p>
          <h1>Casa Pausa Home</h1>
          <p className="home__subtitle">
            Objetos, aromas y texturas para crear pequeños rituales cotidianos.
            Wabi-sabi, luz natural y calidez en cada rincón.
          </p>
          <div className="home__actions">
            <Link to="/tienda" className="btn-primary">Ver tienda</Link>
            <Link to="/rituales" className="btn-secondary">Explorar rituales</Link>
          </div>
        </div>
        <div className="home__image-placeholder">
          {/* poner imagen de la marca o destacado de la misma, aun no se cual :(  */}
        </div>
      </div>
    </section>
  )
}

export default Home
