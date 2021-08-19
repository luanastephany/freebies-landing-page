import React from 'react'
import './Estatistics.scss'

function Item({ icon, title, subtitle }) {
  return (
    <div className="card">
      <div className="icon-box">
        <img src={icon} alt="" />
      </div>

      <div className="titles">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>

    </div>
  )
}

const Estatistics = () => {
  return (
    <div className="data">
      <Item icon="/img/user.svg" title="90+" subtitle="Users" />
      <div className="divider"></div>
      <Item icon="/img/map.svg" title="30+" subtitle="Locations" />
      <div className="divider"></div>
      <Item icon="/img/server.svg" title="50+" subtitle="Servers" />
    </div>
  )
}

export default Estatistics
