import React,{ Component } from "react";
import './style.css';
import API from '../../utils/API';

class SymbolTool extends Component{
    state = {
        symbolArray: [],
        search: ""    
    }

    componentDidMount(){
        this.APIFunction();
    }

    APIFunction(){
        API.allSymbols()
            .then(response => {
                console.log(response.data.length);
                let holderArray = [];
                for(let i=0;i<response.data.length;i++){
                    let curObj = response.data[i];
                    holderArray.push({
                        symbol: curObj.symbol,
                        name: curObj.name
                    })
                }
                this.setState({symbolArray: holderArray});
            })
            .catch(err => {
                console.log(err);
            })
    }

    searchFunction(input){
        let searchArr;
        let newArr= [];
        for(let i=0;i<searchArr.length;i++){
            let thisObj = searchArr[0];
            let inputL = input.length;
            if(input === thisObj.substr(0,inputL)){
                newArr.push(thisObj);
            }
        }
        return newArr;
    }

    handleInputChange = event => {
		this.setState({ search: event.target.value });
	}

    render(){
        const nameList = this.state.symbolArray.map(function(){
            
        });
        return(<>
            <h4>Symbol Tool</h4>
            <div className="mainDiv">
                <div className="leftDiv">
                    <input type="text" onChange={this.handleInputChange}></input>
                </div>
                <div className="rightDiv">
                    <ul id="nameList">
                        
                    </ul>
                </div>
            </div>
            
        </>);
    }

}

export default SymbolTool;