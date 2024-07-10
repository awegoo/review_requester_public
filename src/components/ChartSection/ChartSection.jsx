import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import DraftChart from '../DraftChart/DraftChart';
// import { data as graph_data } from '../../utils/testData';
import styled from "styled-components";
import { fetchDataForGraphs } from '../../utils/fetchData';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StyledLabel, StyledTitle } from "./styled";

const MonthSwitchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ChartSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isDisabled, setIsDisabled] = useState(false);
  const [graph_data, setGraphData] = useState([]);

  useEffect(() => {
    fetchGraphData()
  }, [])

  async function fetchGraphData(){
    const graphdata = await fetchDataForGraphs();
    setGraphData(graphdata);
  };
  
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
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  const filteredData = graph_data.filter(
    (item) => {
      const itemDate = new Date(item.purchase_date);
      return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
    }
  );

  const monthLabel = `${months[currentMonth]}, ${currentYear}`;

  useEffect(() => {
    if (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentMonth, currentYear]);

  return (
    <>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <StyledTitle>
            <h3>Order Requests</h3>
            <p>Updates Daily</p>
          </StyledTitle>
          <MonthSwitchBar>
              <IconButton sx={{ color: '#1C58CF' }} onClick={handlePreviousMonth}>
                <ArrowBackIosNewIcon  sx={{ fontSize: 18 }}/>
              </IconButton>                
              <StyledLabel>{monthLabel}</StyledLabel>                
              <IconButton sx={{ color: '#1C58CF' }} onClick={handleNextMonth} disabled={isDisabled}>
                <ArrowForwardIosIcon sx={{ fontSize: 18 }}/>
              </IconButton>
          </MonthSwitchBar>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 1200 }}>               
              {filteredData.length > 0 ? (
                <DraftChart data={filteredData} />
              ) : (
                <Typography 
                  variant="h6" 
                  align="center" 
                  sx={{
                    color: '#777',
                    fontStyle: 'italic',
                    height: 400, 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  No data found for this period
                </Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ChartSection;