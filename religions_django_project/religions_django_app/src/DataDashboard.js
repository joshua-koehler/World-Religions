import './DataDashboard.css';
import React, { Component } from 'react';
import MyStackedAreaChart from './MyStackedAreaChart';
import MyLineChart from './MyLineChart';
import MyPieChartModal from './MyPieChartModal';

class DataDashboard extends Component {

    state = {
      cdp: [],
    };


    async componentDidMount(){
        try {
            // Use this to test pre-api-return render - const res = await fetch('http://127.0.0.1:8000/religions/api/combined/32482', {
            const res = await fetch('http://127.0.0.1:8000/religions/api/combined/', {
              headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
              }
            });
            const cdp = await res.json();
            this.setState({
                cdp
            });
        } catch (e){
            console.log(e)
        }
      }

    render(){
      return(
       <div id='dashboard'>
          <h1>Analysis of Protestant and Roman Catholic Trends in Mexico</h1>
          <p>Includes census data and polynomial regressive predictive model through the year 2050.</p>
          <MyStackedAreaChart cdp={this.state.cdp}/>
          <MyPieChartModal cdp={this.state.cdp}/>
          <MyLineChart cdp={this.state.cdp}/>
       </div>
      );
    }
}

export default DataDashboard;