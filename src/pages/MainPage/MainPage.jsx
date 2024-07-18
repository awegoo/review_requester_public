import React from "react";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import ChartSection from "../../components/ChartSection/ChartSection";

const MainPage = () => {
  return (
    <>
      <SectionTotal />
      <ChartSection />
      <SectionTable />
    </>
  );
};

export default MainPage;
