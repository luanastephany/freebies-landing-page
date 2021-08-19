import React from 'react'
import './Features.scss'
import { FaCheckCircle } from 'react-icons/fa'

function Feature({ text }) {
  return (
    <div className="feat">
      <FaCheckCircle size={24} color="#2FAB73" />
      <span>{text}</span>
    </div>
  )
}


const Features = () => {
  return (
    <section className="infos">
      <img src="/img/Illustration 2.png" alt="" />

      <div className="info-text">
        <h1>We Provid Many Features You Can Use</h1>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <Feature text="Powerfull online protection." />
        <Feature text="Internet without borders." />
        <Feature text="Supercharged VPN" />
        <Feature text="No specific time limits." />
      </div>
    </section>
  )
}

export default Features
