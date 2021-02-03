import React from "react"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import "./Header.css"

export const Header = () => {
  return (
      <ul className="header">
          <li>
            <Link className="header__link__logo" to="/">
            <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </li>
          <li className="header__saved">
            <Link className="header__saved__link" to="/saved">
              <p className="header__saved__text">Saved Movies</p>
            </Link>
          </li>
      </ul>
  )
}