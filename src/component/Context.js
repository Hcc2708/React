import React, { createContext, useState } from 'react'

import Assesment226 from './Assesment226'
const IncDec = createContext()
const BacColor = createContext()

export default function () {
    const[count, setCount] = useState(0)
    const[color, setColor] = useState("dark")
  return (
    <div>
        <IncDec.Provider value = {{count, setCount}}>
            <BacColor.Provider value = {{color, setColor}}>
                <Assesment226></Assesment226>
            </BacColor.Provider>
        </IncDec.Provider>

    </div>
  )
}

export {IncDec, BacColor}
