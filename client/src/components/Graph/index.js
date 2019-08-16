import React,{ Component } from "react";
import {Line} from "react-chartjs-2";
import API from '../../utils/API';

class Graph extends Component{
    state = {        
        chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: "1st Data",
                data: [10, 20, 30, 40, 50, 60]
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
        }
    }

    chartFunction(){
        API.chart1M()
            .then(response => {})
            .catch(err => {})
    }
    

    render() {
		return(<div className="chartContainer">
            <Line
                data={this.state.chartData}
                height={300}
                options={this.state.chartOptions}
            ></Line>
        </div>);
    }
}

export default Graph;