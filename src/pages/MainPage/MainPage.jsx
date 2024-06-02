import React from "react";
import AutomationPanel from "../../components/AutomationPanel/AutomationPanel";
import SectionGraphs from "../../components/SectionGraphs/SectionGraphs";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import { signOut } from "aws-amplify/auth";

const MainPage = () => {
  return (
    <div>
      <button onClick={signOut}>sign out</button>
      <AutomationPanel />
      <SectionGraphs />
      <SectionTotal />
      <SectionTable />
    </div>
  );
};

export default MainPage;
