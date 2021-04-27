import React, { Component } from 'react';

import { Dropdown } from 'semantic-ui-react'
import MyPieChart from './MyPieChart';
import './MyPieChart.css';

const yearOptions = [
  { key: '1945', text: '1945', value: '1945' },
  { key: '1950', text: '1950', value: '1950' },
  { key: '1955', text: '1955', value: '1955' },
  { key: '1960', text: '1960', value: '1960' },
  { key: '1965', text: '1965', value: '1965' },
  { key: '1970', text: '1970', value: '1970' },
  { key: '1975', text: '1975', value: '1975' },
  { key: '1980', text: '1980', value: '1980' },
  { key: '1985', text: '1985', value: '1985' },
  { key: '1990', text: '1990', value: '1990' },
  { key: '1995', text: '1995', value: '1995' },
  { key: '2000', text: '2000', value: '2000' },
  { key: '2005', text: '2005', value: '2005' },
  { key: '2010', text: '2010', value: '2010' },
  { key: '2015', text: '2015', value: '2015' },
  { key: '2020', text: '2020', value: '2020' },
  { key: '2025', text: '2025', value: '2025' },
  { key: '2030', text: '2030', value: '2030' },
  { key: '2035', text: '2035', value: '2035' },
  { key: '2040', text: '2040', value: '2040' },
  { key: '2045', text: '2045', value: '2045' },
  { key: '2050', text: '2050', value: '2050' },
]

var t = "Select Year";

// TODO when you come back, turn this YearDropdown component into PieChartModal and fix the 0px width issue for the MyPieChart component
// Then add a prop to MyPieChart and allow the toggle to change the pie chart
// Then wrap up all three visualizations into the DataDashboard panel
// Once that is done, build the login page
// Then deploy                

class MyPieChartModal extends Component {
    state = {
        selectedText: "Select a Year",
        year: 1945
    }

    render(){
        return(
            //<div height='800px' id='pieModal'>
            <div id='pieModal'>
                <br/>
                <br/>
                <hr/>
                <br/>
                <Dropdown
                    button
                    className='icon'
                    onChange={(e) => {
                            this.setState({selectedText: e.target.outerText});
                            this.setState({year: e.target.outerText});
                            console.log(this.state.year);
                        }
                    }
                    floating
                    labeled
                    icon='calendar'
                    options={yearOptions}
                    search
                    text={this.state.selectedText}
                    input={this.state.year}
                />
                <MyPieChart year={this.state.year}/>
            </div>
        );

    }
}

export default MyPieChartModal;