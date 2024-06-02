import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
<<<<<<< HEAD
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
=======
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
>>>>>>> 3dcc0da07e13255461bc70f5baace6c2dabd6d2d

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authenticator>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  // </Authenticator>
);
