import React, { Component } from 'react'
 class wish extends Component {
  state={message:"Hello"}
   gmHandling=()=>{
       this.setState({message:"Good Morning"})
   }
   
    render() {
        return (
            <div>
                <h6>EventHandling</h6>
                <h2>message:{this.state.message}</h2>
                <button onClick={this.gmHandling}>GM</button>
            </div>
        )
    }
}

export default wish
