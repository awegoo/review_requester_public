import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator, Button, Heading, Text, View, useAuthenticator, useTheme } from "@aws-amplify/ui-react";
// import AuthenticatorComponent from "./components/Authenticator/Authenticator.jsx";

Amplify.configure(outputs);

const components = {
  
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Forgot your password?
          </Button>
        </View>
      );
    },
  },

  // SignUp: {
  //   Header() {
  //     const { tokens } = useTheme();

  //     return (
  //       <Heading
  //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //         level={3}
  //       >
  //         Create a new account
  //       </Heading>
  //     );
  //   },
  //   Footer() {
  //     const { toSignIn } = useAuthenticator();

  //     return (
  //       <View textAlign="center">
  //         <Button
  //           fontWeight="normal"
  //           onClick={toSignIn}
  //           size="small"
  //           variation="link"
  //         >
  //           Back to Sign In
  //         </Button>
  //       </View>
  //     );
  //   },
  // },
  // ConfirmSignUp: {
  //   Header() {
  //     const { tokens } = useTheme();
  //     return (
  //       <Heading
  //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //         level={3}
  //       >
  //         Enter Information:
  //       </Heading>
  //     );
  //   },
  //   Footer() {
  //     return <Text>Footer Information</Text>;
  //   },
  // },
  SetupTotp: {
    // Header() {
    //   const { tokens } = useTheme();
    //   return (
    //     <Heading
    //       padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //       level={3}
    //     >
    //       Enter Information:
    //     </Heading>
    //   );
    // },
    Footer() {
      return <Text>Don`t have an account?<a href="#">Sign Up now</a></Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  // signUp: {
  //   password: {
  //     label: 'Password:',
  //     placeholder: 'Enter your Password:',
  //     isRequired: false,
  //     order: 2,
  //   },
  //   confirm_password: {
  //     label: 'Confirm Password:',
  //     order: 1,
  //   },
  // },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Authenticator formFields={formFields} components={components} hideSignUp >
        <App />
        </Authenticator>
      </ThemeProvider>
    </React.StrictMode>  
);
