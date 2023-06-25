import React, { useMemo, useState } from 'react'

export default function PracticeUseMemo() {
    const [count, setCount] = useState(0)
    const increment = ()=> count+1
    const decrement = ()=> count-1
    const x = useMemo(()=>increment, [count])
    const y = useMemo(()=>decrement, [count])
    console.log("rerendering")
  return (
    <div>
        <button onClick={()=>setCount(x)}>+</button>
        <div>count : {count}</div>
        
        <button onClick={()=>setCount(y)}>-</button>
    </div>
  )
}
