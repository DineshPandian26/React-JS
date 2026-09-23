import React from 'react'
import "./User.css"

export default function User({name,age,email,ph,city}) {
  return (
    <div className="cardLayout">
        <h2>{name}</h2>

        <p>{city}</p>

        <h5>Email : {email}</h5>

        <h5>Age : {age}</h5>

        <h5>Phone Number:{ph}</h5>

    </div>
  )
}
