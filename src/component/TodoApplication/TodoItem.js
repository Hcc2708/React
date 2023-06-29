import React, { useState } from 'react'
import useList from './useList'

export default function TodoItem() {
    const {list, push, pull}= useList()
    const [todo, setTodo] = useState("")
    const eventHandler = (e)=>{
        
    }
  return (
    <div>
        <form>
            <input type = "text" value={todo} onChange={eventHandler}></input>
            <button type = "submit">Submit</button>
        </form>
        {
            list.map((element, index)=>{
                return (
                    <>
                    <li key ={index}>{element}<button onClick={()=>pull(index)}>Remove</button></li>
                    </>
                )
            })
        }
        
    </div>
  )
}
