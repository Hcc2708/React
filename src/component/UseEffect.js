import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const[count, setCount] = useState(0)
    const[day, setDay] = useState(0)
    useEffect(()=>{
        console.log("1st use effect with count")
    }, [count])
    useEffect(()=>{
        console.log("2nd use effect with day")
    }, [day])
  return (
    <div>
        <div>count : {count}</div>
        <button onClick={() =>{setCount(count+1)}}> count</button>
        <div>day : {day}</div>
        <button onClick={()=>{setDay(day+1)}}>day</button>
    </div>
  )
}
