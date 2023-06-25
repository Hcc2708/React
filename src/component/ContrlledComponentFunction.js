import React, { useState } from 'react'

export default function ContrlledComponentFunction() {
    const[fname, setFname] = useState("")
    const[lname, setLname] = useState("")

  return (
    <div>
        <form >
            <input type = "text" placeholder='default' onChange={(event) =>{setFname(event.target.value)}}></input>
            <input type = "text" placeholder='default1' onChange={(event) =>{setLname(event.target.value)}}></input>
        </form>
        {console.log(fname)}
    </div>
  )
}
