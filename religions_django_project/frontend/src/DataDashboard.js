import './DataDashboard.css';
import React, { Component } from 'react';
import MyStackedAreaChart from './MyStackedAreaChart';
import MyPieChart from './MyPieChart';
import MyLineChart from './MyLineChart';
import MyPieChartModal from './MyPieChartModal';

class DataDashboard extends Component {

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