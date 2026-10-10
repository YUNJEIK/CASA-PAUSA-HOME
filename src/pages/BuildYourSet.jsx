import { Link } from 'react-router-dom'
import './BuildYourSet.css'

const BuildYourSet = () => {
  return (
    <section className="build-set">
      <header className="build-set__header">
        <p className="build-set__eyebrow">Armá tu set</p>
        <h2>Diseñá tu ritual a medida</h2>
        <p className="build-set__subtitle">
          Muy pronto vas a poder combinar velas, textiles, cerámicas y objetos
          para crear tu propio kit personalizado, pensado para un ambiente
          específico de tu casa.
        </p>
      </header>

      <div className="build-set__content">
        <div className="build-set__stepper">
          <div className="build-set__step build-set__step--active">
            <span>1</span>
            <p>Elegí el ambiente</p>
          </div>
          <div className="build-set__step">
            <span>2</span>
            <p>Seleccioná tus piezas</p>
          </div>
          <div className="build-set__step">
            <span>3</span>
            <p>Revisá tu set</p>
          </div>
        </div>

        <div className="build-set__placeholder">
          <p className="build-set__placeholder-title">
            Próximamente: armador interactivo de sets
          </p>
          <p className="build-set__placeholder-text">
            Aquí vas a ver un flujo paso a paso donde podrás:
          </p>
          <ul>
            <li>Elegir el ambiente (dormitorio, living, baño, etc.).</li>
            <li>Seleccionar velas, textiles y cerámicas compatibles.</li>
            <li>Visualizar el resumen de tu kit antes de agregarlo al carrito.</li>
          </ul>
          <p className="build-set__placeholder-text">
            Mientras desarrollamos esta funcionalidad, podés explorar la tienda
            y empezar a imaginar tu combinación ideal de Casa Pausa Home.
          </p>
          <Link to="/tienda" className="btn-primary">
            Explorar la tienda
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BuildYourSet
