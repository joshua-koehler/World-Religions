import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];


const COLORS = ['#8884d8', '#82ca9d', '#FFBB28', '#0088FE','#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function getIndexOfYear(year){
  return (year - 1945) / 5;
}

export default class MyPieChart extends PureComponent {

  // TODO configure with props to be pulled from selector

  state = {
      cdp: [], // Combined Data Point - CDP
      currentCdp: [],  // Combined Data Point for year
      year: this.props.year ? this.props.year : 2020,
  };

  getPieChartJson = (year, cdp) => {
    var index = getIndexOfYear(year);
    var datum = cdp[index];
    console.log(datum);
    var protestant = {"name": "Protestant", "year": year, "percent": datum.protestant_percent}
    console.log(protestant);
    var papist = {"name": "Roman Catholic", "year": year, "percent": datum.papist_percent}
    var other = {"name": "Other", "year": year, "percent": 1 - datum.protestant_percent - datum.papist_percent};
    return [protestant, papist, other];
  }

  async componentDidMount() {
      try {
          const res = await fetch('http://127.0.0.1:8000/religions/api/combined/');
          var cdp = await res.json();
          this.setState({
            cdp
          });
          console.log(cdp);
          var currentCdp = this.getPieChartJson(this.state.year, cdp);
          this.setState({
              currentCdp
          });
          console.log(this.state.currentCdp);
      } catch (e){
          console.log(e)
      }
  }

  async componentWillReceiveProps(nextProps) {
      if(this.props == nextProps){
        console.log("props are same");
        return;
      }
      console.log("componentWIllReceiveProps is called");
      try {
          const res = await fetch('http://127.0.0.1:8000/religions/api/combined/');
          var cdp = await res.json();
          this.setState({
            cdp
          });
          console.log(cdp);
          var currentCdp = this.getPieChartJson(this.props.year, cdp);
          this.setState({
              currentCdp
          });
          console.log(this.state.currentCdp);
      } catch (e){
          console.log(e)
      }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={1800} height={800}>
          <Pie
            data={this.state.currentCdp}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={350}
            fill="#8884d8"
            dataKey="percent"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={200}/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
