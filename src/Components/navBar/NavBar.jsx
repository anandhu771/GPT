import React from 'react'
import './navBar.css'
import {RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
function NavBar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>

      </div>
    </div>
  )
}

export default NavBar