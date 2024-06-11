import React from "react";

import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { theme } from "../../styles/theme";

// const customTheme = {
//   name: 'my-theme',
//   tokens: {
//     colors: {
//       font: {
//         primary: { value: '#008080' },
//         // ...
//       },
//     },
//   },
// };

const AuthenticatorComponent = () => {
  return (
    <ThemeProvider theme={theme.customAuthenticator} >
    <Authenticator>
     
    </Authenticator>
    </ThemeProvider>
  );
};

export default AuthenticatorComponent;