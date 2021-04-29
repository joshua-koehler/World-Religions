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
          <h1>Analysis of Protestant and Roman Catholic Trends in Mexico</h1>
          <p>Includes census data and polynomial regressive predictive model through the year 2050.</p>
          <MyStackedAreaChart/>
          <MyPieChartModal/>
          <MyLineChart/>
       </div>
      );
    }
}

export default DataDashboard;