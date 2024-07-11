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
            src="/logo/ReimbroFavicon.svg"
            alt="logo"
            width={widthMain}
            height={heightMain}
          />
        ) : (
          <img
            src="/logo/ReimbroFavicon.svg"
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
          src="/logo/ReimbroFavicon.svg"
          alt="logo"
          width={widthMain}
          height={heightMain}
        />
      ) : (
        <img
          src="/logo/ReimbroFavicon.svg"
          alt="logo"
          width={widthSmall}
          height={heightSmall}
        />
      )}
    </>
  );
};

export default Logo;
