import React from 'react'
import './Subscription.scss'
import Button from '../Button/Button'


const Subscription = () => {
  return (
    <section className="subscription">
      <div className="subscribe">
        <h1 className="title">Subscribe Now for Get Special Features!</h1>
        <p className="subtitle">Let's subscribe with us and find the fun.</p>
      </div>

      <button className="callToAction">
        <Button>Subscribe Now</Button>
      </button>

    </section>
  )
}

export default Subscription
