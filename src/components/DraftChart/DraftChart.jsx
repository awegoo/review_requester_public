import React from 'react';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  ComposedChart,
  Rectangle
} from 'recharts';
import CustomBarShape from './CustomBarShape';
import './styles.css'
import {theme} from '../../styles/theme'
import {data} from '../../utils/testData'


const CustomTooltip = ({ active, payload, label }) => {
  const tooltipStyle = {
    color: theme.colors.blue,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightGrey,
    fontFamily: theme.fonts.textLinkSmall,
    borderRadius: "5px",
    borderStyle: "solid"
  };
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className='label' style={tooltipStyle}>
        {`Shipped orders: ${payload[0].value}`}<br/>
        {`Sent requests: ${payload[1].value}`}
        </div>
      </div>
    );
  }

  return null;
};


const renderColorfulLegendText = (value, entry) => {
  const { color } = entry;

  return <span style={{ color }}>{value==="count_purchased_orders" ? "Eligible Orders" : "Requests Sent" }</span>;
};

const DraftChart = ({ data }) => {
  
  // const monthlyDataWithDates = data.map(item => ({
  //   ...item,
  //   dayNum: new Date(item.purchase_date).getDate()
  // }));
  
  return (
    <>      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="0" vertical={false}/>
          <XAxis dataKey="dayNum" /> 
          <YAxis />
          <Tooltip cursor={{ stroke: 'none'}} content={<CustomTooltip/>}/>
          <Legend 
            iconType="circle" 
            verticalAlign="top" 
            wrapperStyle={{top:'-10px'}} 
            height={40}
            formatter={renderColorfulLegendText}
          /> 
          <Bar 
            dataKey="count_purchased_orders" 
            fill="#3DC2A233" 
            shape={<CustomBarShape />} 
            barSize={30} 
            activeBar={<Rectangle radius={[10, 10, 0, 0]} fill="#3DC2A299"/>}
          />
          <Line 
            dataKey="count_success_sent_requests"
            stroke="#1C58CF" 
            type="linear"
            strokeWidth={4}
            dot={{ r: 5, strokeWidth: 1}}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>          
    </>
  );
};

export default DraftChart;