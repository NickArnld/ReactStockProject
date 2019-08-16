import React, {Component} from "react";
import './style.css';
import BasicNavbar from '../../components/BasicNavbar';
import Navbar from '../../components/Navbar';
import Graph from '../../components/Graph';
import API from '../../utils/API';

class Charts extends Component{
    state = {
        found: false,
        companyName: "",
        symbol: "",
        exchange: "",
        industry: "",        
        companyInfo: "",
        websiteLink: "",

    } 
    searchFunction = () => {
        API.companyInfo(this.props.match.params.symbol)
            .then(response => {
                this.setState({found: true});              
                this.setState({companyName: response.data.companyName});
                this.setState({symbol: response.data.symbol});
                this.setState({exchange: response.data.exchange});
                this.setState({industry: response.data.industry});
                this.setState({companyInfo: response.data.description});
                this.setState({websiteLink: response.data.website});
                
            }).catch(err => {
                console.log(err);
                this.setState({found: false});  
                this.setState({companyName: "Could not find this Company"});
            })
    }
    componentDidMount(){
        this.searchFunction();
        
    }
    render(){
        if(this.state.found === false){
            return(<>
                <Navbar />

                <div className="chartArea">
                    <h1>{this.state.companyName} </h1>
                </div>
            </>);
        }else{
            return(<>
                <Navbar />

                <div className="chartArea">
                    <h1>{this.state.companyName} </h1>
                    <h4>Stock Symbol: {this.state.symbol}</h4>
                    <h5>Exchange: {this.state.exchange}</h5>
                    <h5>Industry: {this.state.industry}</h5>
                    <div className="cInfo">
                        <h5>Info:</h5>
                        <p>{this.state.companyInfo}</p>
                        <h5>website: <a href={this.state.websiteLink}>{this.state.websiteLink}</a></h5>
                    </div>
                    <h3>Price Chart: Last Month</h3>
                    <Graph />
                </div>
            </>);
        }
    }
}

export default Charts;