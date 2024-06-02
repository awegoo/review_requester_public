import React from "react";
import { StyledItem } from "./styled";

const TotalItem = () => {
  return (
    <>
      <StyledItem>
        <div>
          <h4>Net New Reviews</h4>
          <div className="no_margin">
            <img src="./static/images/icons/info.svg" alt="icon info" className="icon_info" />
          </div>
        </div>
        <p className="number">
          4,51 <span></span>
        </p>
        <div className="no_margin">
          <div className="no_margin">
            <img src="./static/images/icons/box.svg" alt="box"  className="box"/>
            <p className="info_text">Average rating for all products</p>
          </div>          
        </div>
        <img src="./static/images/illustrative/task-list-check.svg" alt="item bg" className="item_bg" />
      </StyledItem>
    </>
  );
};

export default TotalItem;
