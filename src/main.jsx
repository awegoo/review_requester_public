import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { components, formFields } from "./components/constants/constants.jsx";
import Loading from "./components/Loading/Loading.jsx";
// import outputs from "../amplify_outputs.json";

// Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loading />
      <ThemeProvider theme={theme}>
        {/* <div className="authenticator-container">
          <Authenticator
            className="authenticator-custom"
            formFields={formFields}
            components={components}
          > */}
            <App />
          {/* </Authenticator> */}
        {/* </div> */}
      </ThemeProvider>
  </React.StrictMode>
);
