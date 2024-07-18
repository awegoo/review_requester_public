import React from "react";
import { StyledItem } from "./styled";

const TotalItem = ({
  title,
  number,
  star,
  img,
  text,
  backgroundImg,
  className,
  change,
}) => {
  const changeNumber = parseFloat(change?.replace("%", ""));

  return (
    <StyledItem>
      <div className="title">
        <h4>{title}</h4>
        <div className="no_margin">
          <img
            src="./static/images/icons/info.svg"
            alt="icon info"
            className="icon_info"
          />
        </div>
      </div>
      <p className="number">
        {number}{" "}
        <span>
          <img src={star} alt="" />
        </span>
      </p>
      <div className="no_margin">
        <div className="no_margin">
          {img ? <img src={img} alt="box" className={className} /> : null}
          {change ? (
            changeNumber > 0 ? (
              <div className="no_margin">
                <div className="blue_bg no_margin">
                  <img
                    src="./static/images/icons/up.svg"
                    alt="arrow up"
                    className="arrow_up"
                  />
                  <p className="info_text black_text">{change}</p>
                </div>
                <p className="info_text black_text">{text}</p>
              </div>
            ) : (
              <div className="no_margin">
                <div className="yellow_bg no_margin">
                  <img
                    src="./static/images/icons/down.svg"
                    alt="arrow up"
                    className="arrow_up"
                  />
                  <p className="info_text red_text">{change}</p>
                </div>
                <p className="info_text red_text">{text}</p>
              </div>
            )
          ) : (
            <p className="info_text">{text}</p>
          )}
        </div>
      </div>
      <img src={backgroundImg} alt="item bg" className="item_bg" />
    </StyledItem>
  );
};

export default TotalItem;
