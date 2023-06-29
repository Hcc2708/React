import React, { useState } from 'react'

export default function useList() {
    const[list, setList] = useState(["raj","hemchand"])
    const push = (value)=>{
        const newList = list.concat(value)
        setList(newList)
    }
    const pull = (index) =>{
        const newList = list.filter((element, eindex)=>{
            return index !== eindex
        })
        setList(newList)
    }
  return (
    {
        list:list,
        push:push,
        pull:pull
    }
  )
}
