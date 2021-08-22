import React, { Component } from 'react'
import Salary from './Salary';
 class Salarybackup extends Component {
     state={Salary:50000};
     getHike=(Hike_value)=>{
    console.log("salary")
    this.setState({Salary: this.state.Salary+Hike_value})
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                            <h1>Your monthly  Gress Salary:{this.state.Salary}</h1>
                                <div className="card-header">
                                    <div className="body">
                                        <button className="btn btn-success" onClick={this.getHike.bind(this,20000)}>incress Salary</button>
                                        <button className="btn btn-danger" onClick={this.getHike.bind(this,40000)}>more incress salary</button>
                                        <button className="btn btn-primary" onClick={this.getHike.bind(this,1)}>less Salary</button>
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

export default Salarybackup
