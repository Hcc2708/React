import React, { useReducer } from 'react'
import '../App.css'

export default function Assesment() {
   
    const changeColor = (state, action)=>{
        if(action === "black")
        {
            console.log("color changed to black")
            return {currentClass : "blackd"}
        }
        else if(action === "red")
        {
            console.log("color changed to red")
            return {currentClass : "redd"}
        }
        else if(action === "blue")
        {
            console.log("color changed to blue")
            return { currentClass : "blued"}
        }
        else if(action === "yellow")
        {
            console.log("color changed to yellow")
            return {currentClass :"yellowd"}
        }
        else if(action === "green")
        {
           console.log("color changed to green")
            return{currentClass: "greend"}
        }
        return state
    }
    const[state, dispatch] = useReducer(changeColor, {currentClass: "abc"})
  return (
    <div >
        <div id = 'div1' className={state.currentClass}></div>
        <button onClick={()=>dispatch("black")}>Black</button>
        <button onClick={()=>dispatch("red")}>Red</button>
        <button onClick={()=>dispatch("green")}>Green</button>
        <button onClick={()=>dispatch("yellow")}>Yellow</button>
        <button onClick={()=>dispatch("blue")}>Blue</button>
    </div>
  )
}
