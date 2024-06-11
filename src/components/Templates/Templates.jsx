import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import AuthenticatorComponent from "../Authenticator/Authenticator";

const Templates = () => (
  <>
    <Header />
    <Grid
      container
      style={{
        display: "flex",
        minHeight: "100%",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#F4F9FF",
      }}
    >
      <Grid
        item
        xs={12}
        style={{ maxWidth: "1440px", padding: "0 64px", marginTop: "96px" }}
      >
        {/* <AuthenticatorComponent> */}
          <Outlet />
        {/* </AuthenticatorComponent> */}
      </Grid>
    </Grid>
  </>
);

export default Templates;
