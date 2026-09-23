import React from 'react'
import Person from "./components/User.jsx";

export default function App() {
  
 
  const users=[
        {   name: "Akash", 
            city:"Madurai",
            age :21,
            email : "akash@gmail.com",
            ph:123
        },
        {   name: "raju",
            city:"chennai",
            age :17,
            email : "raj@gmail.com",
            ph:234
        },
        {
            name: "chandra", 
            city:"trichy",
            age :40,
            email : "chandra@gmail.com",
            ph:567
        },
        {
          name: "kavi", 
          city:"trichy",
          age :38,
          email : "kavitha@gmail.com",
          ph:9789
        },
        {
          name: "naveen", 
          city:"mumbai",
          age :30,
          email : "naveen@gmail.com",
          ph:9876
        }
  ];

  return (
    <div>
      <h2>User Data</h2>
      {users.map((c,i)=>(
        <Person 
          key={i}
          name={c.name}
          city={c.city}
          age={c.age}
          email={c.email}
          ph={c.ph}
        />
      ))}

      {}
    </div>
  )
}
