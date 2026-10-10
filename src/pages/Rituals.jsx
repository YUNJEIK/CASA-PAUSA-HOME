import { Link } from 'react-router-dom'
import './Rituals.css'

const Rituals = () => {
  const rituals = [
    {
      id: 1,
      name: 'Dormitorio / Sanctuary Room',
      description:
        'Calma profunda, descanso y desconexión al final del día. Combina velas suaves, textiles respirables y cerámica artesanal.',
    },
    {
      id: 2,
      name: 'Sala de Estar / Living Room',
      description:
        'Momentos de pausa, lectura y calidez compartida. Aromas cálidos y luz tenue para acompañar tus noches de lectura.',
    },
    {
      id: 3,
      name: 'Comedor & Recibidor',
      description:
        'Bienvenida acogedora y encuentros pausados. Piezas que acompañan reuniones y rituales de sobremesa.',
    },
    {
      id: 4,
      name: 'Home Office & Biblioteca',
      description:
        'Enfoque sereno, claridad mental y pausas conscientes. Aromas verdes y objetos funcionales para acompañar el trabajo.',
    },
    {
      id: 5,
      name: 'Espacio Baño / Spa & Wellness',
      description:
        'Rituales de autocuidado con texturas nido de abeja, cerámica junto al agua y aromas relajantes.',
    },
    {
      id: 6,
      name: 'Cocina & Comedor Diario',
      description:
        'Texturas cotidianas y calidez en la rutina. Velas y objetos que se integran al día a día.',
    },
    {
      id: 7,
      name: 'Balcón & Terraza / Outdoor',
      description:
        'Conexión con el exterior, aire libre y atardeceres lentos. Piezas pensadas para acompañar tus pausas al aire libre.',
    },
  ]

  return (
    <section className="rituals">
      <header className="rituals__header">
        <p className="rituals__eyebrow">Rituales del hogar</p>
        <h2>Rituales & Sets prearmados</h2>
        <p className="rituals__subtitle">
          Colecciones cápsula pensadas para cada ambiente de casa. Próximamente
          vas a encontrar sets curados con combinaciones de textiles, velas y
          cerámicas para que sólo tengas que elegir tu rincón favorito.
        </p>
      </header>

      <div className="rituals__grid">
        {rituals.map(ritual => (
          <article key={ritual.id} className="ritual-card">
            <div className="ritual-card__tag">Próximamente</div>
            <h3>{ritual.name}</h3>
            <p>{ritual.description}</p>
            <p className="ritual-card__note">
              Aquí se mostrará un set prearmado con productos Casa Pausa Home
              pensados para este ambiente.
            </p>
          </article>
        ))}
      </div>

      <div className="rituals__footer">
        <p>
          Mientras tanto, podés explorar todos los productos disponibles desde
          la tienda y empezar a imaginar tus propios rituales.
        </p>
        <Link to="/tienda" className="btn-primary">
          Ver todos los productos
        </Link>
      </div>
    </section>
  )
}

export default Rituals
