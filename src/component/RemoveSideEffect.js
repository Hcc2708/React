import React, { useEffect, useState } from 'react'

export default function () {
    const[count, setCount] = useState(0)
    useEffect(()=>{
        const x = setInterval(()=>{
            console.log("hello")
        }, 2000)
        return (
            clearInterval(x)
        )
    })
  return (
    <div>
        <div>day : {count}</div>
        <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}
