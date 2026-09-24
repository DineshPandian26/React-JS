import React,{useState} from 'react'
import "../index.css"

export default function Counter() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h3>Count : {count}</h3>
      <button className="box" onClick={()=>setCount(count + 1)}>Increament</button>
      <button className="box" onClick={()=>setCount(count-1)}>Decreament</button>
      <button className="box" onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
