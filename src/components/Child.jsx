import React from 'react'

export default function child({name,city,age,email,ph}) {
  return (
    <div className="user-card">

          

            <div className="user-heading">
                <h2>{name}</h2>

                <p>
                    {city}
                </p>
            </div>



            <div className="user-details">

                <div className="detail-row">
                    <span className="detail-label">
                        Age
                    </span>

                    <span className="detail-value">
                        {age}
                    </span>
                </div>


                <div className="detail-row">
                    <span className="detail-label">
                         Email
                    </span>

                    <span className="detail-value">
                        {email}
                    </span>
                </div>


                <div className="detail-row">
                    <span className="detail-label">
                        Phone
                    </span>

                    <span className="detail-value">
                        {ph}
                    </span>
                </div>

            </div>



        </div>
  )
}
