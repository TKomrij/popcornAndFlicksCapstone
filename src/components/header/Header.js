import React from "react"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import "./Header.css"

export const Header = () => {
  return (
      <ul className="header">
          <li>
            <Link className="header__link" to="/">
            <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </li>
      </ul>
  )
}