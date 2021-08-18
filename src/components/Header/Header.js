import React from 'react'
import './Header.scss'
import ButtonRound from '../ButtonRound/ButtonRound'


const Header = () => {
  return (
    <header className="header">
      <img src="/img/Logo.png" alt="" />

      <div className="menu">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </div>

      <div className="buttons">
        <p>Sign In</p>
        <ButtonRound>Sign Up</ButtonRound>
      </div>
    </header>
  )
}

export default Header
