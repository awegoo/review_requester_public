import React from 'react';
import AutomationPanel from '../../components/AutomationPanel/AutomationPanel';
import SectionGraphs from '../../components/SectionGraphs/SectionGraphs';
import SectionTotal from '../../components/SectionTotal/SectionTotal';
import SectionTable from '../../components/SectionTable/SectionTable';

const MainPage = () => {
  return (
    <div>
      <AutomationPanel />
      <SectionGraphs />
      <SectionTotal />  
      <SectionTable />
    </div>
  );
};

export default MainPage;