import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import DraftChart from '../DraftChart/DraftChart';
import ProdChart from '../DraftChart/ProdChart';
// import { data as graph_data } from '../../utils/testData';
import styled from "styled-components";
import { fetchDataForGraphs } from '../../utils/fetchData';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StyledLabel } from "./styled";

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
    // --- comment code below for use of testData ---
    const [graph_data, setGraphData] = useState([]);

    useEffect(() => {
      fetchGraphData()
    }, [])
  
    async function fetchGraphData(){
      const graphdata = await fetchDataForGraphs();
      setGraphData(graphdata);
    };
    // --- comment code above for use of testData ---
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];

    const handlePreviousMonth = () => {
      setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    };

    const handleNextMonth = () => {
      setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    };

    const filteredData = graph_data.filter(
      (item) => new Date(item.purchase_date).getMonth() === currentMonth
    );
    
    const monthLabel = `${months[currentMonth]}, 2024`;

    // if currentMonth > String(new Date().getMonth() + 1).padStart(2, '0') 
    
    return (
      <>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Order Requests
            </Typography>
            <MonthSwitchBar>
                <IconButton sx={{ color: '#1C58CF' }} onClick={handlePreviousMonth}>
                  <ArrowBackIosNewIcon  sx={{ fontSize: 18 }}/>
                </IconButton>                
                <StyledLabel>{monthLabel}</StyledLabel>                
                <IconButton sx={{ color: '#1C58CF' }} onClick={handleNextMonth}>
                  <ArrowForwardIosIcon sx={{ fontSize: 18 }}/>
                </IconButton>
            </MonthSwitchBar>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Box sx={{ width: '100%', maxWidth: 1200 }}>               
                <DraftChart data={filteredData}/> 
                {/* style={{marginTop: "20px"}} */}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </>
    );
  };
  
  export default ChartSection;
