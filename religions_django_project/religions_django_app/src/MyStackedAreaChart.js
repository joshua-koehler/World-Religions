import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';


export default class MyStackedAreaChart extends PureComponent {

    render() {
      let ready = this.props.cdp && this.props.cdp.length > 0;
      if(ready){
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={this.props.cdp}
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
      } else{
        return (
          <h2>Awaiting data.</h2>
        );
      }
    }
  }