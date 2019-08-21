import React, {Component} from "react";
import './style.css';
import BasicNavbar from '../../components/BasicNavbar';
import Navbar from '../../components/Navbar';
import Graph from '../../components/Graph';
import CompCard from '../../components/CompCard';

class Charts extends Component {
    render(){
        return(<>
            <Navbar />
            <CompCard symbol = {this.props.match.params.symbol}/>
            <Graph symbol = {this.props.match.params.symbol}/>
        </>);
    }
    
}

export default Charts;