import './App.css';
import React, { Component } from 'react';
import DataDashboard from './DataDashboard';
import YearDropdown from './MyPieChartModal';
import MyPieChartModal from './MyPieChartModal';

class App extends Component {
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
        <div>
          <DataDashboard/>
        </div>
      );
    }
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/