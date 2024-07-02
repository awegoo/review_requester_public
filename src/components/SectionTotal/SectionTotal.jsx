import React, { useEffect, useState } from "react";
import TotalItem from "../TotalItem/TotalItem";
import { StyledContainer } from "./styled";
import {
  fetchTotalRequestInMonth,
  fetchTotalRequestYear,
} from "../../utils/fetchData";

const SectionTotal = () => {
  const [requestCurrentYear, setRequestCurrentYear] = useState(0); 
  const [requestCurrentMonth, setRequestCurrentMonth] = useState(0);  
  const [requestPastData, setRequestPastData] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);


  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;  
  const pastMonth = currentDate.getMonth();

  const dataCurrentForRequest = {
    year: currentYear,
    month: currentMonth,
  };

  const dataPastForRequest = {
    year: currentYear,
    month: pastMonth,
  };

  const fetchTotalYear = async () => {
    try{
      const response = await fetchTotalRequestYear(currentYear);
      return response[0]?.requests_count;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCurrentData = async () => {
    try {
      const response = await fetchTotalRequestInMonth(dataCurrentForRequest);
      return response[0]?.requests_count;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPastData = async () => {
    try {
      const response = await fetchTotalRequestInMonth(dataPastForRequest);
      return response[0]?.requests_count;
    } catch (error) {
      console.log(error);
    }
  };

  const calculatePercentageChange = (current, past) => {
    if (past === 0) return 100;
    if (current === 0) return -100;
    return ((current - past) / past) * 100;
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentData = await fetchCurrentData();
      const pastData = await fetchPastData();
      const totalYear = await fetchTotalYear();

      setRequestCurrentYear(totalYear);
      setRequestCurrentMonth(currentData);
      setRequestPastData(pastData);

      const change = calculatePercentageChange(currentData, pastData);
      setPercentageChange(change);
    };

    fetchData();
  }, []);

  const data = [
    {
      title: "Net New Reviews",
      number: "4,51",
      star: "./static/images/icons/star.svg",
      img: "./static/images/icons/box.svg",
      className: "box",
      text: "Average rating for all products",
      backgroundImg: "./static/images/illustrative/Illustrative_1.png",
    },
    {
      title: "Total Requests Sent",
      number: requestCurrentYear,
      img: "./static/images/icons/medal.svg",
      className: "box",      
      text: "Goal: 10,000 requests",
      backgroundImg: "./static/images/illustrative/Illustrative_2.png",
    },
    {
      title: "Months Requests Sent",
      number: requestCurrentMonth,
      className: "chart_chip",
      change: ` ${percentageChange}% `,
      text: 'vs last month',
      backgroundImg: "./static/images/illustrative/Illustrative_3.png",
    },
    {
      title: "Total Skipped Requests",
      number: "97",
      className: "chart_chip",
      change: ` ${percentageChange}% `,
      text: "vs last month",
      backgroundImg: "./static/images/illustrative/Illustrative_4.png",
    },
  ];

  return (
    <StyledContainer>
      {data.map((item) => (
        <TotalItem
          key={item.title}
          title={item.title}
          number={item.number}
          star={item.star}
          img={item.img}
          text={item.text}
          backgroundImg={item.backgroundImg}
          className={item.className}
          change={item.change}
        />
      ))}
    </StyledContainer>
  );
};

export default SectionTotal;
