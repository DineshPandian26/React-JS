import React from 'react'
import Child from "./components/Child.jsx";

export default function App() {
  let name= "Dinesh"; 
  let city="Madurai";
  let age =21;
  let email = "dinu@gmail.com"
  let ph=123;


  let name1= "pranesh"; 
  let city1="Madurai";
  let age1 =19;
  let email1 = "pranu@gmail.com"
  let ph1=456;

  let name2= "pandian"; 
  let city2="trichy";
  let age2 =40;
  let email2 = "pandian@gmail.com"
  let ph2=789;

  let name3= "kavitha"; 
  let city3="trichy";
  let age3 =38;
  let email3 = "kavitha@gmail.com"
  let ph3=9789;


  return (
    <div>
      <Child name={name} city={city} age={age} email={email} ph={ph}/>
      <Child name={name1} city={city1} age={age1} email={email1} ph={ph1}/>
      <Child name={name2} city={city2} age={age2} email={email2} ph={ph2}/>
      <Child name={name3} city={city3} age={age3} email={email3} ph={ph3}/>
    </div>
  )
}
