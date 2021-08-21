import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Board = ({ title, texts }) => {
  return (
    <div className="board">
      <h1>{title}</h1>
      <div className="list">
        {texts.map(text => (
          <span>{text}</span>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <section className="footer">

        <div className="text-social">
          <img className="logo" src="/img/Logo.png" alt="" />
          <p className="subtitle"><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>

          <div className="socials">
            <div className="social">
              <FaFacebookF color="#F53838" />
            </div>

            <div className="social">
              <FaTwitter color="#F53838" />
            </div>

            <div className="social">
              <FaInstagram color="#F53838" />
            </div>


          </div>
        </div>


        <div className="baseboard">
          <Board
            title="Product"
            texts={[
              "Download",
              "Pricing",
              "Locations",
              "Server",
              "Countries",
              "Blog",
            ]}
          />

          <Board
            title="Engage"
            texts={[
              "LaslesVPN?",
              "FAQ",
              "Tutorials",
              "About Us",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />

          <Board
            title="Earn Money"
            texts={[
              "Affiliate",
              "Become Partner",
            ]}
          />


        </div>



      </section>
    </footer>

  )
}

export default Footer
