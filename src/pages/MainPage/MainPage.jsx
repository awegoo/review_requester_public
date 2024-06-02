import React from "react";
import AutomationPanel from "../../components/AutomationPanel/AutomationPanel";
import SectionGraphs from "../../components/SectionGraphs/SectionGraphs";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import { signOut } from "aws-amplify/auth";

const MainPage = () => {
  return (
    <div>
<<<<<<< HEAD
      <SectionTotal /> 
      <AutomationPanel />
      <SectionGraphs />       
=======
      <button onClick={signOut}>sign out</button>
      <AutomationPanel />
      <SectionGraphs />
      <SectionTotal />
>>>>>>> 3dcc0da07e13255461bc70f5baace6c2dabd6d2d
      <SectionTable />
    </div>
  );
};

export default MainPage;
