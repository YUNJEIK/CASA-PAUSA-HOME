import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.jsx'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">CASA PAUSA HOME</Link>
      </div>
      <nav className="navbar__links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
        <NavLink to="/category/velas">Velas</NavLink>
        <NavLink to="/category/textiles">Textiles</NavLink>
        <NavLink to="/category/ceramica">Cerámica</NavLink>
        <NavLink to="/category/objetos">Objetos</NavLink>
        <NavLink to="/rituales">Rituales & Sets</NavLink>
        <NavLink to="/arma-tu-set">Armá tu Set</NavLink>
        <NavLink to="/diario-de-pausas">Diario de Pausas</NavLink>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
