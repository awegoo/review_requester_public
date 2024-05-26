import React from 'react';
import AutomationPanel from '../../components/AutomationPanel/AutomationPanel';
import SectionGraphs from '../../components/SectionGraphs/SectionGraphs';
import SectionTotal from '../../components/SectionTotal/SectionTotal';
import PlaceForFeatureData from '../../components/PlaceForFeature/PlaceForFeatureData';

const MainPage = () => {
  return (
    <div>
      <AutomationPanel />
      <SectionGraphs />
      <SectionTotal />  
      {/* <PlaceForFeatureData />  */}
    </div>
  );
};

export default MainPage;