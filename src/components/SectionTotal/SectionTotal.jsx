import React from "react";
import TotalItem from "../TotalItem/TotalItem";
import { StyledContainer } from "./styled";
import { data } from "../constants/constants";

const SectionTotal = () => {
  const itemInfo = data;

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
