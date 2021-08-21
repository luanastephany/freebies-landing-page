import React, { useState } from 'react'
import './Plans.scss'
import { FaCheck } from 'react-icons/fa'
import ButtonRound from '../ButtonRound'

const Plan = ({ image, title, price, benefits, selected, onClick }) => {
  let classes = "plan"
  if (selected) {
    classes += " selected"
  }

  return (
    <div onClick={onClick} className={classes} >
      <img src={image} alt="" />

      <div className="texts">
        <p>{title}</p>

        {benefits.map(benefit => (
          <div className="list">
            <FaCheck color="#2FAB73" />
            <span>{benefit}</span>
          </div>
        ))}

      </div>

      <div className="prices">
        <h1 className="price">{price}</h1>
      </div>

      <ButtonRound>Select</ButtonRound>

    </div>
  )
}

const Plans = () => {
  const [selected, setSelected] = useState("free")

  return (
    <div className="plans">
      <h1 className="plan-title">Choose Your Plan</h1>
      <p className="sub">Let's choose the package that is best for you and explore it happily and cheerfully.</p>

      <div className="types">
        <Plan
          image="/img/Free.png"
          title="Free Plan"
          price="Free"
          selected={selected === "free"}
          onClick={() => setSelected("free")}
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
          selected={selected === "standard"}
          onClick={() => setSelected("standard")}
          benefits={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
          ]}
        />

        <Plan
          image="/img/Premium.png"
          title="Premium Plan"
          price="$12/mo"
          selected={selected === "premium"}
          onClick={() => setSelected("premium")}
          benefits={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features",
          ]} />
      </div>

    </div>
  )
}

export default Plans
