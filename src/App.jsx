// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//PARA PODER USAR UN COMPONENTE
//1. IMPORTARLO
// import + NOMBRE DEL COMPONENTE + from "direccion del archivo"
import ItemListContainer from "./components/ItemListContainer"
import NavBarRBS from './components/NavBarRBS';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 
 
console.log('App')
  return (
   <div>
        <NavBarRBS/>
        <ItemListContainer greeting='Bienvenidos a mi App' />
      <ItemDetailContainer/>
   </div>
  )
}

export default App
