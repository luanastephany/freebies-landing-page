import React from 'react'
import './Plans.scss'


const Plan = ({ image, title, price, benefits }) => {
  return (
    <div className="plan">
      <img src={image} alt="" />

      <div className="texts">
        <p>{title}</p>
        {benefits.map(item => (
          <div>
            ICONE -
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="prices">
        <h1>{price}</h1>
      </div>

    </div>
  )
}

const Plans = () => {
  return (
    <div className="plans">
      <h1>Choose Your Plan</h1>
      <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>

      <div className="types">
        <Plan
          image="/img/Free.png"
          title="Free Plan"
          price="Free"
          benefits={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
          ]}
        />
        <Plan
          image="/img/Standard.png"
          title="Standard Plan"
          price="$9/mo"
          benefits={[]} />
        <Plan
          image="/img/Premium.png"
          title="Premium Plan"
          price="$12/mo"
          benefits={[]} />
      </div>

    </div>
  )
}

export default Plans
