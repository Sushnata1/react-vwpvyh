import React, { Component } from 'react';
class EventBind extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      message : 'hello'
    }
    //this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = ()=>
  {
    this.setState({message:'goodbye'})
  }

  render()
  {
    return (
      <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}
export default EventBind