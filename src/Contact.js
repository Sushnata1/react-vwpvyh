import React ,{Component} from 'react'
class Contact extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      text : "Sushnata"
    }
  }

  render()
  {
    return (
      <div>
        <h1> Contact us </h1>
        <input type="text" name="text" value={this.state.text} onChange={this.onChange} />
        <h2>{this.state.text}</h2>
      </div>
    )
  }

  onChange = (e)=>
  {
    this.setState({[e.target.name]:e.target.value})
  }

}

export default Contact;