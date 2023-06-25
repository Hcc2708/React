import React, {useState, useEffect} from 'react'
import '../App.css'
export default function ApiFetching() {
    const [joke, setJoke] = useState({})
    async function fetchData() {
      const response = await fetch("https://api.quotable.io/quotes/random")
      const jasondata = await response.json()
      setJoke(jasondata[0])
    }
    useEffect(()=>{
      fetchData()
     },[])
    return (
      
      <div style={{
        display: "flex" , justifyContent: "center", alignItems: "center", flexDirection:"column",
        height:"200px",
        width:"400px",
        margin: "auto",
        marginTop:"165px",
        textAlign:"center"
      }}>
        <div style={{
        display: "flex" , justifyContent: "center", alignItems: "center", flexDirection: "column",
        border: "1px solid grey",
        borderRadius:"8px",
        backgroundColor:"ButtonShadow",
        boxShadow:"2px 2px grey"
      }}>
          <div><h4>{joke.content}</h4></div>
          <div>{joke.author}</div>
          <button style={{backgroundColor:"green", color:"HighlightText", borderRadius:"5px", border:"none"}}>Generate</button>
        </div>
      </div>
    );
}
