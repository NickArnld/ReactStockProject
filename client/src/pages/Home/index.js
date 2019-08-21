import React, { Component } from "react";
import './style.css';
import Navbar from '../../components/Navbar';
import SymbolTool from '../../components/SymbolTool';

function Home(props){
    return(<>
        <Navbar />
        <div className="homeB jumbotron">
            <h1>Welcome!</h1>
            <p>This is my User Interface for the IEX Stock API, built with React.</p>
            <p>Use the search bar above to find charts and information on stocks.</p>
        </div>
        <h3>Popular Stocks</h3>
        <div className="toolSection">
            <SymbolTool />
        </div>
    </>);
}

export default Home;