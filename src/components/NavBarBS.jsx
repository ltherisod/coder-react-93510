import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarBS = () => {
  return (
    <nav className="navbar sm:navbar-expand bg-1 fg-2">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/nuevos">Nuevos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/mas vendidos">Mas Vendidos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" to="/category/ofertas">Ofertas</NavLink>
          </li>
        </ul>
      </div>
    </dialog>
  </div>
</nav>
  )
}

export default NavBarBS