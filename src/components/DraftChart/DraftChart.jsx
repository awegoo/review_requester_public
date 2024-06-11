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
import { data } from '../../utils/generatedData';


// const data = [
//   { day: 1, requests: 900, eligible: 850 },
//   { day: 2, requests: 750, eligible: 700 },
//   { day: 3, requests: 800, eligible: 760 },
//   { day: 4, requests: 700, eligible: 650 },
//   { day: 5, requests: 850, eligible: 800 },
//   { day: 6, requests: 800, eligible: 750 },
//   { day: 7, requests: 900, eligible: 860 },
//   { day: 8, requests: 850, eligible: 800 },
//   { day: 9, requests: 800, eligible: 780 },
//   { day: 10, requests: 750, eligible: 730 },
//
//   { day: 30, requests: 1000, eligible: 950 },
// ];

const DraftChart = () => {
  
  return (
    <>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Order Requests
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 1200 }}>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data}>
                  <CartesianGrid strokeDasharray="0" vertical={false}/>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip cursor={{ stroke: 'none'}}/>
                  <Legend />
                  <Bar 
                    dataKey="eligible" 
                    fill="#1C58CF33" 
                    shape={<CustomBarShape />} 
                    barSize={30} 
                    activeBar={<Rectangle radius={[10, 10, 0, 0]} fill="#1C58CF99"/>}
                  />
                  <Line 
                    dataKey="requests"
                    stroke="#30E3B9" 
                    type="linear"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default DraftChart;