import React, { Component } from 'react'
import Emplist from './Emplist'
 class Emp extends Component {
     product_Name="honer9N"
     price=15000;
     color=["block","white","red","blue"]

    render() {
        return (
            <>
                <h6>props concept</h6>
                <Emplist name={this.product_Name}
                price={this.price}
                color={this.color}/>
                
            </>
        )
    }
}

export default Emp
