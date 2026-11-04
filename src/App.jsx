import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Layout from './layouts/Layout'

function App() {

  return (
    <>
      <Layout>
        <ItemListContainer greeting={"Bienvenido a mi ecommerce"} />
      </Layout>

      <Layout>
        <ItemDetailContainer />
      </Layout>
    </>
  )
}

export default App
