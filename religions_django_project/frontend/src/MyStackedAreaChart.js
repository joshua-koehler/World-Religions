import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';


export default class MyStackedAreaChart extends PureComponent {
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
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={this.state.cdp}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Legend/>
            <Area type="monotone" dataKey="protestant_percent" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="papist_percent" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }
  }