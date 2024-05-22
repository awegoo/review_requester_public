import React from 'react';
import GraphItem from '../GraphItem/GraphItem';

const SectionGraphs = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
};
  return (
    <div style={styles.container}>
      <GraphItem />
      <GraphItem />
    </div>
  );
};

export default SectionGraphs;
