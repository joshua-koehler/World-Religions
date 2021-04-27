import './DataDashboard.css';
import React, { Component } from 'react';
import MyStackedAreaChart from './MyStackedAreaChart';
import MyPieChart from './MyPieChart';
import MyLineChart from './MyLineChart';
import MyPieChartModal from './MyPieChartModal';

class DataDashboard extends Component {
    /*
    state = {
        cdp: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/religions/api/combined/');
            const cdp = await res.json();
            this.setState({
                cdp
            });
        } catch (e){
            console.log(e)
        }
    }
    */

    render(){
      return(
       <div id='dashboard'>
          <MyStackedAreaChart/>
          <MyPieChartModal/>
          <MyLineChart/>
       </div>
      );
    }
}

export default DataDashboard;