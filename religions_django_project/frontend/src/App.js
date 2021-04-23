import './App.css';
import React, { Component } from 'react';
import MyStackedAreaChart from './MyStackedAreaChart';

class App extends Component {
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

    render(){
      return(
        <div>
          <MyStackedAreaChart/>
        </div>
      );
      /*
        return (
            <div>
                <MyStackedAreaChart/>
                {this.state.cdp.map(item => (
                    <div key={item.id}>
                        <h1>{item.year}</h1>
                        <span>Protestant: {item.protestant_percent}%</span>
                        <br/>
                        <span>Papist: {item.papist_percent}%</span>
                    </div>
                ))}

                <MyStackedAreaChart/>
            </div>
        );
        */
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