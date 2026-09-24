import React, {useState} from 'react'

export default function Theme() {
    const[theme,setTheme]=useState(false)
  return (
    <div
    style={{
        backgroundColor: theme? "#333":"#fff",
        color:theme?"#fff":"#333",
        // padding:"20px",
        // margin:"25px",
      }}
    >
    <button onClick={()=>setTheme(!theme)}>
        Swith to {theme?"Light":"Dark"} mode
    </button>
    <p>Now it's in {theme?"Dark":"Light" } mode</p>
    </div>
  );
}
