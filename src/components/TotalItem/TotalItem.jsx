import React from "react";
import { StyledItem } from "./styled";

const TotalItem = ({ title, number, star, img, text, backgroundImg, className }) => {
  return (
    <>
      <StyledItem>
        <div className="title">
          <h4>{title}</h4>
          <div className="no_margin">
            <img src="./static/images/icons/info.svg" alt="icon info" className="icon_info" />
          </div>
        </div>
        <p className="number">
          {number} <span><img src={star} alt="" /></span>
        </p>
        <div className="no_margin">
          <div className="no_margin">
            <img src={img} alt="box"  className={className}/>
            <p className="info_text">{text}</p>
          </div>          
        </div>
        <img src={backgroundImg} alt="item bg" className="item_bg" />
      </StyledItem>
    </>
  );
};

export default TotalItem;
