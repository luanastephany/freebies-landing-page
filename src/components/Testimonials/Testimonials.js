import React, { useState, useRef } from 'react'
import './Testimonials.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import Faker from 'faker'

const createTestimonial = () => {
  return {
    id: Faker.random.uuid(),
    avatar: Faker.internet.avatar(),
    name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    location: `${Faker.address.city()}, ${Faker.address.country()}`,
    description: Faker.lorem.sentence(),
    rate: Faker.datatype.float({ min: 3, max: 5 })
  }
}

const createItems = (amount) => {
  const arr = []
  for (let i = 0; i < amount; i++) {
    const testimonial = createTestimonial()
    arr.push(testimonial)
  }
  return arr
}

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="head">
        <img src={item.avatar} alt="" className="avatar" />
        <div className="info">
          <span className="name">{item.name}</span>
          <span className="location">{item.location}</span>
        </div>
        <span className="rate">{item.rate}</span>
        <FaStar size={16} color="#fea250" />
      </div>

      <div className="description">{item.description}</div>
    </div>
  )
}

const Testimonials = () => {
  const [selected, setSelected] = useState(0)
  const [items] = useState(createItems(6))
  const slider = useRef()

  return (
    <section className="testimonials">
      <h1>Trusted by Thousands of Happy Customer</h1>
      <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>

      <div className="carousel-wrapper">
        <Slider
          ref={slider}
          afterChange={index => setSelected(index)}
          slidesToShow={2.3}
          slidesToScroll={1}
          centerMode
          autoplay
        >
          {items.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      <div className="controls">
        <div className="dots">
          {items.map((_, index) => (
            <div
              onClick={() => {
                setSelected(index)
                slider.current.slickGoTo(index)
              }}
              className={`dot ${selected === index ? 'selected' : ''}`}
            />
          ))}

        </div>
        <div className="buttons">
          <button onClick={() => slider.current.slickPrev()} >
            <FaArrowLeft size={20} />
          </button>
          <button onClick={() => slider.current.slickNext()} >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

    </section>
  )
}

export default Testimonials
