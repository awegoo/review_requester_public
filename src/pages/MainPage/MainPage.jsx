import React from 'react';
import AutomationPanel from '../../components/AutomationPanel/AutomationPanel';
import SectionGraphs from '../../components/SectionGraphs/SectionGraphs';
import SectionTotal from '../../components/SectionTotal/SectionTotal';

const MainPage = () => {
  return (
    <div>
      <AutomationPanel />
      <SectionGraphs />
      <SectionTotal />  
    </div>
  );
};

export default MainPage;