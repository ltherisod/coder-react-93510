import logo from "../../assets/logo.png"
import Cartwidget from "../Cartwidget/Cartwidget"
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="brand">
        <img src={logo} alt="" />
      </div>

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