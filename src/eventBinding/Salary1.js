import React, { Component } from 'react'
import Salary from './Salary';
 class Salary1 extends Component {
     state={Salary:60000}
     getSalary=(your_salary)=>{
         console.log("30k")
         this.setState({Salary:this.state.Salary+your_salary})
     }
    render() {
        return (
            <React.Fragment><div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-head">
                        <h1>My Salary is {this.state.Salary}</h1>
                            <div className="body"></div>
                            <button className="btn btn-success" onClick={this.getSalary.bind(this,40000)}>salary 1</button>
                            <button className="btn btn-primary" onClick={this.getSalary.bind(this,30000)}>Salary 2</button>
                            <button className="btn btn-danger" onClick={this.getSalary.bind(this,50000)}>Salary 3</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
            </React.Fragment>
        )
    }
}

export default Salary1
