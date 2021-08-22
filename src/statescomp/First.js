import React from 'react'
class First extends React.Component
{
    state={name:"VINAY REDDY"}
    addName=()=>{
        this.setState({name:"vicky Reddy"})
    }
  render(){
      return(
          <React.Fragment>
              <h3>PSA</h3>
              <h1>name:{this.state.name}</h1>
             <button type="button" class="btn btn-secondary"onClick={this.addName}>press</button>

          </React.Fragment>
      )
  }
}
export default First;