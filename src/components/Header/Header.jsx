import React from 'react';

const Header = () => {
  const styles = {
    container: {
      height: '50px',
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: '5px',
      borderBottom: '1px solid #f0f0f0',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      position: 'sticky',
    },
    heading: {
      color: '#333',
      fontSize: '22px',
    }
  };

  return (
    <header style={styles.container}>
      <h1 style={styles.heading}>Header</h1>
    </header>
  );
};

export default Header;
