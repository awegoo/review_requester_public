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
// import { data } from '../../utils/generatedData';

const DraftChart = ({ data }) => {

  const divStyle = {
    backgroundColor: 'yellow', 
    marginTop: '20px',
    marginBottom: '20px',
    $ul: {
      display: 'flex',
      justifyContent: 'space-between' 
    } 
    // display: 'flex',
    // justifyContent: 'space-between'  
  };
  
  const monthlyDataWithDates = data.map(item => ({
    ...item,
    dayNum: new Date(item.purchase_date).getDate()
  }));
  
  return (
    <>      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={monthlyDataWithDates}>
          <CartesianGrid strokeDasharray="0" vertical={false}/>
          <XAxis dataKey="dayNum" /> 
          <YAxis />
          <Tooltip cursor={{ stroke: 'none'}}/>
          <Legend iconType="circle" verticalAlign="top" wrapperStyle={divStyle}/>
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