import React, {useState} from 'react'

export default function LocalStorage() {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[loggedin, isLoggedIn] = useState(false)
    const signIn = ()=>{
        const loginData = {
            name,
            email,
            password
        }
        localStorage.setItem("user-data", JSON.stringify(loginData))
        isLoggedIn(true)
    }
    const logOut = ()=>{
        localStorage.removeItem("user-data")
        isLoggedIn(false)
        setEmail("")
        setName("")
        setPassword("")
       }
  return (
    <div> 
        { 
        !loggedin? (
            <div>
                Name : <input type='text' placeholder='Name' value = {name} onChange ={(e)=>setName(e.target.value)}></input><br></br>
                Email : <input type='text' placeholder='Email' value = {email} onChange ={(e)=>setEmail(e.target.value)}></input><br></br>
                Password : <input type='text' placeholder='Password' value = {password} onChange ={(e)=>setPassword(e.target.value)}></input><br></br>
                <button onClick={signIn}>SignIn</button><br></br>
            </div>
        ):(
            <div>
                <h1>Hey! you are Logged in</h1><br></br>
                <button onClick={logOut}> Log out</button>
            </div>
        )}
       
    </div>
  )
}
