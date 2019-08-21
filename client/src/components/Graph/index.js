import React,{ Component } from "react";
import './style.css';
import {Line} from "react-chartjs-2";
import API from '../../utils/API';

class Graph extends Component{
    state = {        
        chartData: {
            labels: [],
            datasets: [{
                label: "1st Data",
                data: []
            }]            
        },
        chartOptions: {
            showLine: true,
            maintainAspectRatio: false,
            scales: {
                yAxes:[{
                    ticks: {
                        min: 0,
                        max: 70
                    }
                }]
            }
        },
        aLength: 0
    }

    chartFunction(){
        API.chart1M(this.props.symbol)
            .then(response => {
                console.log(response.data.length);
                this.dataOrganize(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    dataOrganize(resArray){
        this.setState({aLength: resArray.length});
        let labelArray = [];
        let dataArray = [];
        let highP = 0;
        let lowP = 0;

        for(let i=0;i<resArray.length;i++){
            let curDay = resArray[i];
            labelArray.push(curDay.label);
            dataArray.push(curDay.close);

            if(i === 0){
                highP = curDay.close;
                lowP = curDay.close;
                continue;
            }

            if(curDay.close > highP){
                highP = curDay.close;
            }

            if(curDay.close < lowP){
                lowP = curDay.close;
            }
        }

        let chartMin = Math.floor(lowP)-3;
        let chartMax = Math.ceil(highP)+3;

        if(chartMin<0){
            chartMin = 0;
        }

        let newChartData = {
            labels: labelArray,
            datasets: [{
                label: "Closing Price",
                data: dataArray,
                lineTension: 0.1,
                borderColor: 'rgba(255, 233, 38, 0.808)',
                pointRadius: 4,
                pointHitRadius: 6
            }] 
        }

        let newChartOptions = {            
            showLine: true,
            maintainAspectRatio: false,
            scales: {
                yAxes:[{
                    ticks: {
                        min: chartMin,
                        max: chartMax
                    }
                }]
            }
        }
        
        this.setState({
            chartData: newChartData,
            chartOptions: newChartOptions
        })
    }
    
    componentDidMount(){
        this.chartFunction();
    }

    render() {
		return(
        <div className="chartContainer">
            <h3>Price Chart: Last {this.state.aLength} Trading Days</h3>
            <Line
                data={this.state.chartData}
                height={300}
                options={this.state.chartOptions}
            ></Line>
        </div>);
    }
}

export default Graph;