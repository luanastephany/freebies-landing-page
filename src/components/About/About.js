import React from 'react'
import './About.scss'
import Button from '../Button/Button'

const About = () => {
  return (
    <section className="about">
      <div className="description">
        <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
        <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <Button>Get Started</Button>
      </div>

      <img src="/img/Illustration 1.png" alt="" />
    </section>
  )
}

export default About
