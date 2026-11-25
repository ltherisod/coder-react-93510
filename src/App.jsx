// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//PARA PODER USAR UN COMPONENTE
//1. IMPORTARLO
// import + NOMBRE DEL COMPONENTE + from "direccion del archivo"
import ItemListContainer from "./components/ItemListContainer"
import NavBarRBS from './components/NavBarRBS';
import ItemDetailContainer from './components/ItemDetailContainer';
//CONFIG DE NAVEGACION
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {


  console.log('App')
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBarRBS />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a mi App' />} />
        <Route path='/category/:type' element={<ItemListContainer greeting='Estas en la categoría: ' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout/>}/>
         <Route path='/cart' element={<CartContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
