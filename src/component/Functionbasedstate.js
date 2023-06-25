import React, { useState } from 'react'
import '../App.css'
export default function Functionbasedstate() {
    const [num, setNum] = useState(2)
    const[name, setName] = useState("hemchand")
    const[skill, setSkill] = useState("java")
    const[color, setColor] = useState("light")
    const addOne = ()=>{
        setNum(num*5)
        
        setSkill("Python")
    }
    const addTwo = ()=>{
        setName("raj")
    }
    const addThree = ()=>{
        
        setSkill("Python")
    }
    const changeColor = ()=>{
        color === "light"? setColor("dark"): setColor("light")
    }
  return (
    <div className= {color}>
        <button onClick={()=> addOne()}>-</button>
        <h1>{num}</h1>
        <button onClick={()=> addTwo()}>+</button>
        <h1>{name}</h1>
        <button onClick={()=> addThree()}>=</button>
        <h1>{skill}</h1>
        <button onClick ={()=> changeColor()}>Change color</button>
    </div>
  )
}
