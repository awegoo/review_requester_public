import React, { useEffect } from "react";
import AutomationPanel from "../../components/AutomationPanel/AutomationPanel";
import SectionGraphs from "../../components/SectionGraphs/SectionGraphs";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import { generateClient } from "aws-amplify/data";
import DraftChart from "../../components/DraftChart/DraftChart";
import ProdChart from "../../components/DraftChart/ProdChart";
import ChartSection from "../../components/ChartSection/ChartSection";

const client = generateClient();

const MainPage = () => {

  // useEffect(() => {
  //   fetchRequestsWithStatusMonth({year:2024, month:6})
  // },[])

  return (
    <>
      <SectionTotal />
      <ChartSection/>
      <SectionTable />
    </>
  );
};

export default MainPage;
