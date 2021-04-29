import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class MyLineChart extends PureComponent {

  state = {
        cdp: []
    };

    async componentDidMount() {
        try {
            //const res = await fetch('http://127.0.0.1:8000/religions/api/combined/');
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

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.state.cdp}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="protestant_percent" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="papist_percent" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
