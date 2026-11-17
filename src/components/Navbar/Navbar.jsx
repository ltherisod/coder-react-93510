import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"
import Cartwidget from "../Cartwidget/Cartwidget"
import "./navbar.css";

const Navbar = () => {

  const categories = [
    {
      id: 1,
      label: "Teclados",
      path: "teclados"
    },
    {
      id: 2,
      label: "Mouse",
      path: "mouse"
    },
    {
      id: 3,
      label: "Auriculares",
      path: "auriculares"
    }
  ];

  return (
    <nav className="navbar">
      <Link to="" className="brand">
        <img src={logo} className="brand-img" alt="" />
      </Link>

      <ul className="categories">
        {
          categories.map((category) => (
            <NavLink to={`/category/${category.path}`} className="category" key={category.id} >{category.label}</NavLink>
          ))
        }
      </ul>

      <Cartwidget />
    </nav>
  )
}

export default Navbar