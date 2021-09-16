import React, {Component} from 'react';

class About extends Component
{
  constructor()
  {
    super()
    this.state = {
      message : "WElcome visitor"
    };
  }

changeMessage()
{
  this.setState({message:"Thank you for subscribing"})
}

  render()
  {
    return(
      <div>
       <h1> About us </h1>
       <p>{this.state.message}</p>
       <button onClick={()=>this.changeMessage()}>Subscribe</button>
       </div>
    );
  }


}

export default About