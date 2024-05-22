import React from 'react';
import TotalItem from '../TotalItem/TotalItem';

const SectionTotal = () => {
const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
};

  return (
    <div style={styles.container}>
      <TotalItem />
      <TotalItem />
      <TotalItem />
      <TotalItem />
    </div>
  );
};
 
export default SectionTotal;
