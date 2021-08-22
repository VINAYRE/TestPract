import React, { Component } from 'react'
 class Salary extends Component {
     state={Salary:40000};
     hike20kHandler=()=>{
          console.log("20k");
          this.setState({Salary:60000})
      }
      hike30kHandler=()=>{
          console.log("30k")
          this.setState({Salary:70000})
      }
      hike1rsHandler=()=>{
          console.log("1rupees")
          this.setState({Salary: 40001})
      }

    render() {
        return (
            <React.Fragment>
             <div className="container">
                 <div className ="row">
                     <div className="col">
                         <div className="card">
                             <div className="card-head">
                             <h3>{this.state.Salary}</h3>
                                 <div className="body">
                                 <button className="btn btn-primary" onClick={this.hike20kHandler} >hike20k</button>
                                 <button className="btn btn-danger" onClick={this.hike30kHandler}>hike30k</button>
                                 <button  className="btn btn-success" onClick={this.hike1rsHandler}>hike1rupees</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             
             
            </React.Fragment>
        )
    }
}

export default Salary

