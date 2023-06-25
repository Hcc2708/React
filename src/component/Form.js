import React, { useRef, useState } from 'react'

export default function Form() {
    const fname = useRef()
    const lname = useRef()
    const [s, setCondition] = useState(false)
    const sumbitHandler = (event)=>{
        event.preventDefault()
        setCondition(true)
    }

  return (
    <div>
        <form onSubmit={sumbitHandler} >
        <input type = "text" placeholder='abcd' ref = {fname}></input>
        <input type = "text" placeholder='abcde' ref = {lname}></input>
        <button type = 'submit'> Submit</button>
        </form>
        <h1>{s ? (<h1>{fname.current.value} {lname.current.value}</h1>):"Submit it"}</h1>
    </div>
  )
}
