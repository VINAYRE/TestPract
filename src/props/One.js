import React from 'react';
import Two from './Two'
 class One extends React.Component {
     product_Name="honer9N"
     price=15000;
     color=["white","block","blue"]
     more_Details={usage:"good mobile",desc:"best offers"}
    render() {
        return (
            <div>
                <Two name={this.product_Name}
                price={this.price}
                color={this.color}
                details={this.more_Details}/>

            </div>
        )
    }
}

export default One
