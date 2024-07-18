import {
  Button,
  Heading,
  Text,
  View,
  useAuthenticator,
  useTheme,
  Link,
} from "@aws-amplify/ui-react";
import React from "react";
import { styled } from "styled-components";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

const CustomButton = styled(Button)`
  &:hover {
    text-decoration: none;
    border: 1.5px solid #1c58cf;
    background-color: #fff;
    border-radius: 100px;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #1c58cf;
  font-family: "Wix Madefor Text";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          style={{
            color: "#231F20",
            fontFamily: "Wix Madefor Text",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "46px",
          }}
        >
          Sign in
        </Heading>
      );
    },

    Footer() {
      const { toForgotPassword, toSignUp } = useAuthenticator();

      const handleSignUp = (event) => {
        event.preventDefault();
        toSignUp("signUp"); // Перехід до форми реєстрації
      };

      return (
        <View textAlign="center">
          <CustomButton
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
            color="#1C58CF"
          >
            Forgot your password?
          </CustomButton>
          <Text>
            Don`t have an account?{" "}
            <CustomLink href="#" color="#1C58CF" onClick={handleSignUp}>
              Sign Up now
            </CustomLink>
          </Text>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          style={{
            color: "#231F20",
            fontFamily: "Wix Madefor Text",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "46px",
          }}
        >
          Sign Up
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Text>
            Already have an account?{" "}
            <CustomLink href="#" color="#1C58CF" onClick={toSignIn}>
              Sign In now
            </CustomLink>
          </Text>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          style={{
            color: "#231F20",
            fontFamily: "Wix Madefor Text",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "46px",
          }}
        >
          Enter Information:
        </Heading>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  // SetupTotp: {
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
  //     return (
  //       <Text>
  //         Don`t have an account?<a href="#">Sign Up now</a>
  //       </Text>
  //     );
  //   },
  // },
  // ConfirmSignIn: {
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
  // ForgotPassword: {
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
  // ConfirmResetPassword: {
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
};

export const formFields = {
  signIn: {
    password: {
      placeholder: "Enter your password",
      label: "Password",
      fontFamily: "Wix Madefor Text",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
    },
  },
  signUp: {
    password: {
      placeholder: "Enter your password",
      label: "Password",
      fontFamily: "Wix Madefor Text",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
    },
    confirm_password: {
      placeholder: "Please confirm your password",
      label: "Confirm password",
      fontFamily: "Wix Madefor Text",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
    },
  },
  // forceNewPassword: {
  //   password: {
  //     placeholder: "Enter your Password:",
  //   },
  // },
  // forgotPassword: {
  //   username: {
  //     placeholder: "Enter your email:",
  //   },
  // },
  // confirmResetPassword: {
  //   confirmation_code: {
  //     placeholder: "Enter your Confirmation Code:",
  //     label: "New Label",
  //     isRequired: false,
  //   },
  //   confirm_password: {
  //     placeholder: "Enter your Password Please:",
  //   },
  // },
  // setupTotp: {
  //   QR: {
  //     totpIssuer: "test issuer",
  //     totpUsername: "amplify_qr_test_user",
  //   },
  //   confirmation_code: {
  //     label: "New Label",
  //     placeholder: "Enter your Confirmation Code:",
  //     isRequired: false,
  //   },
  // },
  // confirmSignIn: {
  //   confirmation_code: {
  //     label: "New Label",
  //     placeholder: "Enter your Confirmation Code:",
  //     isRequired: false,
  //   },
  // },
};

export const columns = [
  "Order ID",
  "Review Request Status",
  "Product Name",
  "UNITS",
  "PURCHASE_DATE",
];

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  sx: {
    zIndex: 1500,
  },
};
