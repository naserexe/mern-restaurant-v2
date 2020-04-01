import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">MERN Restaurant</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <a className="modal-trigger nav-link" data-toggle="modal" data-target="#add-ingredient-modal" href="!#">Add Ingredient</a>
            </li>

            <li className="nav-item">
              <a className="modal-trigger nav-link" data-toggle="modal" data-target="#add-dish-modal" href="!#">Add Dish</a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;