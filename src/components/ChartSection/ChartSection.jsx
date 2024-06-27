import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import DraftChart from '../DraftChart/DraftChart';
import ProdChart from '../DraftChart/ProdChart';
import { data } from '../../utils/testData';
import styled from "styled-components";
import { fetchDataForGraphs } from '../../utils/fetchData';

const MonthButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MonthSwitchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ChartSection = () => {
    const [currentMonth, setCurrentMonth] = useState(0);

    const [graph_data, setGraphData] = useState([]);

    useEffect(() => {
        fetchGraphData()
    }, [])
  
    async function fetchGraphData(){
      const graphdata = await fetchDataForGraphs();
      console.log(graphdata);
      setGraphData(graphdata);
    };
  
    console.log(graph_data)

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const handlePreviousMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    };

    const filteredData = graph_data.filter( //data
        (item) => new Date(item.purchase_date).getMonth() === currentMonth
    );

    const monthLabel = `${months[currentMonth]} 2024`;
    
    return (
      <>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            {/* <Typography variant="h5" component="div">
              Order Requests
            </Typography> */}
            <MonthSwitchBar>
                <MonthButton onClick={handlePreviousMonth}>Prev</MonthButton>
                <h2>{monthLabel}</h2>
                <MonthButton onClick={handleNextMonth}>Next</MonthButton>
            </MonthSwitchBar>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Box sx={{ width: '100%', maxWidth: 1200 }}>               
                {/* <DraftChart data={filteredData} /> */}
                <ProdChart data = {filteredData}/>              
              </Box>
            </Box>
          </CardContent>
        </Card>
      </>
    );
  };
  
  export default ChartSection;