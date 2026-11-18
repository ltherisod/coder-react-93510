import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a mi ecommerce"} />} />
          <Route path='/category/:type' element={<ItemListContainer greeting={"Bienvenido a mi ecommerce"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
