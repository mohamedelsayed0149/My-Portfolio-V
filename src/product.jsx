import React, { Component } from 'react';

class Product extends Component {
    state = { 
        Name : "burger",
        Count : 3 ,
        imgUrl : "logo192.png"
    }
    render() { 
        return (
        <div>
            <img src={this.state.imgUrl} alt=""/>
            <span>{this.state.Name}</span>
            <span className="badge badge-primary m-2">{this.state.Count}</span>
        </div>
        );


    }
}
 
export default Product;