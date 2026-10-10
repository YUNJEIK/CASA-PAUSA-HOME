import './DiarioDePausas.css'

const DiarioDePausas = () => {
  return (
    <section className="diario">
      <header className="diario__header">
        <p className="diario__eyebrow">Contenido & rituales</p>
        <h2>Diario de Pausas</h2>
        <p className="diario__subtitle">
          Un espacio para compartir rituales, inspiración visual y pequeñas
          pausas cotidianas. Próximamente vamos a conectar aquí nuestras redes
          sociales y contenidos de Casa Pausa Home.
        </p>
      </header>

      <div className="diario__grid">
        <article className="diario-card">
          <h3>Instagram</h3>
          <p>
            Fotos de ambientes reales, detalles de texturas y rituales diarios.
            Aquí vas a encontrar tips de styling, rituales de lectura y momentos
            de pausa en casa.
          </p>
          <p className="diario-card__placeholder">
            Próximamente verás el feed integrado de @casapausa.home
          </p>
        </article>

        <article className="diario-card">
          <h3>YouTube</h3>
          <p>
            Videos de rutinas largas: rituales de noche, mañanas lentas y tours
            por rincones de Casa Pausa. Ideal para inspirarte y acompañar tus
            propias pausas.
          </p>
          <p className="diario-card__placeholder">
            Próximamente se integrarán los últimos videos del canal.
          </p>
        </article>

        <article className="diario-card">
          <h3>TikTok</h3>
          <p>
            Clips cortos: texturas, aromas, tips rápidos y behind the scenes de
            las colecciones. Pequeñas pausas visuales para tu día.
          </p>
          <p className="diario-card__placeholder">
            Próximamente verás aquí el contenido más reciente.
          </p>
        </article>

        <article className="diario-card">
          <h3>Blog & SEO</h3>
          <p>
            Guías más extensas sobre cómo elegir velas según el ambiente, cómo
            combinar textiles y cerámicas, y cómo diseñar tus propios rituales
            en casa.
          </p>
          <p className="diario-card__placeholder">
            Este espacio se convertirá en el diario escrito de Casa Pausa Home.
          </p>
        </article>
      </div>
    </section>
  )
}

export default DiarioDePausas
