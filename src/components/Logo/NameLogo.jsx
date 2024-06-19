import React from "react";
// import Image from "next/image";



const NameLogo  = ({ width = 100, height = 20 }) => {
  return (
    <img src="/logo/NameLogo.svg" alt="logo" width={width} height={height} />
  );
};

export default NameLogo;
