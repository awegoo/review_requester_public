import React from "react";
// import Image from "next/image"; //?


const Logo  = ({
  type = "rectangle",
  color = "blue",
  widthMain = 140,
  heightMain = 30,
  widthSmall = 32,
  heightSmall = 32,
}) => {
  if (color === "white") {
    return (
      <>
        {type === "rectangle" ? (
          <img
            src="/logo/MainWhiteLogo.svg"
            alt="logo"
            width={widthMain}
            height={heightMain}
          />
        ) : (
          <img
            src="/logo/SmallWhiteLogo.svg"
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
          src="/logo/MainLogo.svg"
          alt="logo"
          width={widthMain}
          height={heightMain}
        />
      ) : (
        <img
          src="/logo/SmallLogo.svg"
          alt="logo"
          width={widthSmall}
          height={heightSmall}
        />
      )}
    </>
  );
};

export default Logo;
