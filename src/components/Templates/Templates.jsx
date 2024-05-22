import React from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Templates = () => (
  <>
    <Header />
    <Grid
      container
      style={{
        display: 'flex',
        minHeight: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <Grid item xs={12} style={{ maxWidth: '1240px' }}>
        <Outlet />
      </Grid>
    </Grid>
  </>
);

export default Templates;
