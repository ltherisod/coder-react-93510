import logo from "../../assets/logo.png"
import Cartwidget from "../Cartwidget/Cartwidget"

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" width={50} />

      <ul>
        <li>Teclados</li>
        <li>Mouse</li>
        <li>Auriculares</li>
      </ul>

      <Cartwidget />
    </nav>
  )
}

export default Navbar