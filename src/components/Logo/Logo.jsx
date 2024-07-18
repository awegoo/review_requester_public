import React from "react";

const Logo = ({
  type = "rectangle",
  color = "blue",
  widthMain = 140,
  heightMain = 30,
  widthSmall = 70,
  heightSmall = 50,
}) => {
  if (color === "white") {
    return (
      <>
        {type === "rectangle" ? (
          <img
            src="/logo/RateQuest_icon.png"
            alt="logo"
            width={widthMain}
            height={heightMain}
          />
        ) : (
          <img
            src="/logo/RateQuest_icon.png"
            alt="logo"
            width={widthSmall}
            height={heightSmall}
          />
        )}
      </>
    );
  }

  return (
    <>
      {type === "rectangle" ? (
        <img
          src="/logo/RateQuest_icon.png"
          alt="logo"
          width={widthMain}
          height={heightMain}
        />
      ) : (
        <img
          src="/logo/RateQuest_icon.png"
          alt="logo"
          width={widthSmall}
          height={heightSmall}
        />
      )}
    </>
  );
};

export default Logo;
