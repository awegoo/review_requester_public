import React from 'react';

const TotalItem = () => {
  const styles = {
    container: {
      width: '175px',
      height: 'auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      border: '1px solid #f0f0f0',
      textAlign: 'center',
    },
    heading: {
      color: '#333',
      fontSize: '24px',
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Total Item</h1>
    </div>
  );
};

export default TotalItem;
