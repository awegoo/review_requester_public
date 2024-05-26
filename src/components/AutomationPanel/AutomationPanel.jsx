import React from 'react';

const AutomationPanel = () => {
  const styles = {
    container: {
      height: '70px',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      border: '1px solid #f0f0f0',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    heading: {
      color: '#333',
      fontSize: '24px',
    }
  };


  return (
  <div style={styles.container}>
    <h1 style={styles.heading}>Automation Panel</h1>
  </div>
  );
};

export default AutomationPanel;
