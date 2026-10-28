// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//PARA PODER USAR UN COMPONENTE
//1. IMPORTARLO
// import + NOMBRE DEL COMPONENTE + from "direccion del archivo"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount'
import NavBarBS from './components/NavBarBS';
import NavBarRBS from './components/NavBarRBS';

function App() {
 
  const alumnos = [{nombre:'pepe', curso:'CSS'}, {nombre:'pepe', curso:'CSS'}]
console.log('App')
  return (
   <div>
    <NavBarRBS/>
    {/* <NavBarBS/> */}
        <ItemListContainer greeting='Bienvenidos a mi App' />
        <ItemCount/>
   </div>
  )
}

export default App
