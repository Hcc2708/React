import React, { useContext } from 'react'
import { IncDec } from './Context'
import { BacColor } from './Context'
import '../App.css'
export default function Assesment226() {
    const {count, setCount} = useContext(IncDec)
    const {color, setColor} = useContext(BacColor)
    
  return (
    <div className={color}>
        <button onClick={()=>setCount(count+1)}>+</button>
        <div id = {color}>count : {count}</div>
        <button onClick={()=>setCount(count-1)}>-</button><br></br>
        <button onClick={()=>color ==='dark'?setColor('light'):setColor('dark')}>Dark/Light</button>
    </div>
  )
}
