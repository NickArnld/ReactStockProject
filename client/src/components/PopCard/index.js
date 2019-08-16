import React,{ Component } from "react";
import './style.css';

class PopCard extends Component{
    state = {

    }

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
        <div className="card">
            <img className="stockImg" src={this.props.stockPhoto}></img>
            <div className="card-body">
                <h6 className="card-title">{this.props.companyName}</h6>
                <h7>Stock Symbol: {this.props.symbol}</h7>
            </div>
        </div>);
    }
}

export default PopCard;