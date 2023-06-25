import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {

  constructor(props){
    super()
    this.state = {
        cnt: 0,
        txt: ""
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState.cnt)
    if(nextState.cnt >15)
    {
        return false
    }
    else return true
  }
  update = ()=>{
    this.setState({
        cnt:this.state.cnt+1
    })
  }
  componentDidUpdate(prevProps, prevState){
        if(prevState.cnt == 14)
        {
        this.setState( { txt :"your count has reached at " + (prevState.cnt+1)})
        }
  }
  render() {
    return (
      <div className='container'>
        <div className='divtag'> Count: {this.state.cnt}</div>
        <button onClick={this.update} className='btn'> count </button>
        <h1 id='h'>{this.state.txt}</h1>
        {console.log( "day : ", this.state.cnt)}
      </div>
    )
  }
}
