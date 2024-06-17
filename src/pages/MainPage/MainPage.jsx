import React, { useEffect } from "react";
import AutomationPanel from "../../components/AutomationPanel/AutomationPanel";
import SectionGraphs from "../../components/SectionGraphs/SectionGraphs";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import { generateClient } from "aws-amplify/data";
import DraftChart from "../../components/DraftChart/DraftChart";

const client = generateClient();

const MainPage = () => {

  // useEffect(() => {
  //   fetchDatafromApi()
  // },[])

  return (
    <>
      <SectionTotal />
      <DraftChart />
      <SectionTable />
    </>
  );
};

export default MainPage;
