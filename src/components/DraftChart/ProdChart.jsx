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
import { useEffect, useState } from "react";
import { fetchDataForGraphs } from '../../utils/fetchData';


const DraftChart = () => {

  const [graph_data, setGraphData] = useState([]);

    useEffect(() => {
        fetchGraphData()
    }, [])
  
    //test
    async function fetchGraphData(){
      const graphdata = await fetchDataForGraphs();
      console.log(graphdata);
      setGraphData(graphdata);
    };
  
    console.log(graph_data)
  return (
    <>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 1200 }}>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={graph_data}>
                  <CartesianGrid strokeDasharray="0" vertical={false}/>
                  <XAxis dataKey="purchase_date" />
                  <YAxis />
                  <Tooltip cursor={{ stroke: 'none'}}/>
                  <Legend />
                  <Bar 
                    dataKey="count_purchased_orders" 
                    fill="#1C58CF33" 
                    shape={<CustomBarShape />} 
                    barSize={30} 
                    activeBar={<Rectangle radius={[10, 10, 0, 0]} fill="#1C58CF99"/>}
                  />
                  <Line 
                    dataKey="count_success_sent_requests"
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