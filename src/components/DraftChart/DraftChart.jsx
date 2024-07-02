import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
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
  
  const monthlyDataWithDates = data.map(item => ({
    ...item,
    dayNum: new Date(item.day).getDate()
  }));
  
  return (
    <>      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={monthlyDataWithDates}>
          <CartesianGrid strokeDasharray="0" vertical={false}/>
          <XAxis dataKey="dayNum" /> 
          <YAxis />
          <Tooltip cursor={{ stroke: 'none'}}/>
          <Legend />
          <Bar 
            dataKey="eligibleOrders" 
            fill="#1C58CF33" 
            shape={<CustomBarShape />} 
            barSize={30} 
            activeBar={<Rectangle radius={[10, 10, 0, 0]} fill="#1C58CF99"/>}
          />
          <Line 
            dataKey="requestsSent"
            stroke="#30E3B9" 
            type="linear"
            strokeWidth={3}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>          
    </>
  );
};

export default DraftChart;