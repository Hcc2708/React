import React, { Component } from 'react'

export default class Classbased extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <div>{this.props.arr.map((x, i) =>{
        return (
            <li>{x}</li>
        )
      })}
      <button onClick={()=>this.setState(this.state.count - 1)}>-</button>
      <h1>{this.state.count}</h1>
      </div>
    )
  }
}
