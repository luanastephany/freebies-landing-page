import React from 'react'
import './ButtonRound.scss'

const ButtonRound = (props) => {
  return (
    <button className="btn-round">{props.children}</button>
  )
}

export default ButtonRound
