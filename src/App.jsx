import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './components/Cart/Cart.jsx'
import CheckoutForm from './components/CheckoutForm/CheckoutForm.jsx'
import Rituals from './pages/Rituals.jsx'
import BuildYourSet from './pages/BuildYourSet.jsx'
import DiarioDePausas from './pages/DiarioDePausas.jsx'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tienda' element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm />} />
          <Route path='/rituales' element={<Rituals />} />
          <Route path='/arma-tu-set' element={<BuildYourSet />} />
          <Route path='/diario-de-pausas' element={<DiarioDePausas />} />
          <Route path='*' element={<h2 style={{ padding: '2rem' }}>Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  )
}

export default App
