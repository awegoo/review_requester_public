import React, { useEffect, useState } from "react";
import TotalItem from "../TotalItem/TotalItem";
import { StyledContainer } from "./styled";
import { data } from "../constants/constants.jsx";
import { fetchDatafromApi, fetchTotalRequestInMonth, fetchTotalRequestYear } from "../../utils/fetchData";

const SectionTotal = () => {
  const itemInfo = data;

  const [requestCurrentData, setRequestCurrentData] = useState("");
  const [requestPastData, setRequestPastData] = useState("");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const pastMonth = currentDate.getMonth();

  const dataCurrentForRequest = {
    year: currentYear,
    month: currentMonth,
  };

  const dataPastForRequest = {
    year: currentYear,
    month: pastMonth,
  };

  const fetchCurrentData = async () => {
    try {q
      const response = await fetchTotalRequestYear(currentYear);
      setRequestCurrentData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPastData = async () => {
    try {
      const response = await fetchTotalRequestInMonth(dataPastForRequest);
      setRequestPastData(response);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {    
    fetchCurrentData();
    fetchPastData();
  }, []);

  console.log(requestCurrentData);
  console.log(requestPastData);

  return (
    <StyledContainer>
      {itemInfo.map((item) => (
        <TotalItem
          key={item.title}
          title={item.title}
          number={item.number}
          star={item.star}
          img={item.img}
          text={item.text}
          backgroundImg={item.backgroundImg}
          className={item.className}
        />
      ))}
    </StyledContainer>
  );
};

export default SectionTotal;
