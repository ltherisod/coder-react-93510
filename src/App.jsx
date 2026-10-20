import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
   <main>
    <Navbar />
    <ItemListContainer greeting={"Bienvenido a mi ecommerce"} />
   </main>
  )
}

export default App
