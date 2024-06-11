import React from "react";
import AutomationPanel from "../../components/AutomationPanel/AutomationPanel";
import SectionGraphs from "../../components/SectionGraphs/SectionGraphs";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import { signOut } from "aws-amplify/auth";
import AuthenticatorComponent from "../../components/Authenticator/Authenticator";



const MainPage = () => {
  return (
    <div>
      {/* <AuthenticatorComponent> */}
        <SectionTotal />
        <button onClick={signOut}>sign out</button>
        <SectionTable />
        <AutomationPanel />
        <SectionGraphs />
      {/* </AuthenticatorComponent> */}
    </div>
  );
};

export default MainPage;
