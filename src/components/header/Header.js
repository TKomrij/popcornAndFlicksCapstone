import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
      <ul className="header">
          <li>
            <Link className="header__link" to="/">
              <img src="/images/logo.png" alt="logo"/>
            </Link>
          </li>
      </ul>
  )
}