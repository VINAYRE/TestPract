import React, { Component } from 'react'
import Salary from './Salary';
 class Salarybackup1 extends Component {
     state={Salary:50000};
     get30kSalary=()=>{
        console.log("30k")
         this.setState({Salary:700000})
     }
     get40kSalary=()=>{
         this.setState({ Salary:900000})
     }
     get1RsSalary=()=>{
         this.setState({Salary:50001})
     }
    render() {
        return (
            <React.Fragment>
               <h1>Your monthly Grass Salary: {this.state.Salary}</h1>
               <button onClick={this.get30kSalary}>increce salary</button>
               <button onClick={this.get40kSalary}>more increce Salary</button>
               <button onClick={this.get1RsSalary}>less increce Salary</button>
            </React.Fragment>
        )
    }
}

export default Salarybackup1
