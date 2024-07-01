import React from 'react';

const GraphItem = () => {
  const styles = {
    container: {
      width: '450px',
      height: '150px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      border: '1px solid #f0f0f0',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: '#333',
      fontSize: '28px',
    }
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Graph Item</h1>
    </div>
  );
};

export default GraphItem;
