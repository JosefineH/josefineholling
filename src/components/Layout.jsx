
import React from "react"
import Navbar from "./Navbar"
import NavbarPage from './NavbarPage'
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
export default Layout
