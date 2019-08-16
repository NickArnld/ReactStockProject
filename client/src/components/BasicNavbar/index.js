import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './style.css';

class BasicNavbar extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            searchPlaceHolder: "Search Stock Symbol",
            toChart: false,
            search: ""
        }
    }

    handleInputChange = event => {
		this.setState({ search: event.target.value });
	}
    componentDidMount(){
        this.setState({search: ""});
    }

    searchStock = (event) => {
        event.preventDefault();
        let symbol = this.state.search;

        if(symbol === ""){
            this.setState({searchPlaceHolder: "Please Enter Something"});
        }else{
            this.setState({toChart: true});
        }

    }

    render (){
        // if(this.state.toChart === true){
        //     return <Redirect to={`/chart/${this.state.search}`}/>
        // };

        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand flex-grow-1" href="/">React-Stock-Project</a>                
                {/* <form className="form-inline" onSubmit={this.searchStock}>
                    <input className="form-control sBar" onChange={this.handleInputChange} type="search" placeholder={this.state.searchPlaceHolder} aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn navSearch" id="button-addon2" type="submit">Search</button>
                    </div>                    
                </form> */}
                <div className="flex-grow-1"></div>                
            </nav>
        </div>);
    }
}

export default BasicNavbar;