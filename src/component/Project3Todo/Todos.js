import React from 'react'
import './Todos.css'
export default function () {
  return (
    <div>
        <h1>
            Todo Application
        </h1>
        <div className='row'>
            <div className='item item1'>
                <ul>
                    <li>Inbox</li>
                    <li>Today</li>
                    <li>Next7day</li>
                </ul>
            </div>
            <div className='item item2'>
                MainSection
            </div>
        </div>
    </div>
  )
}
