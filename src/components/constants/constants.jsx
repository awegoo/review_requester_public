import {
  Button,
  Heading,
  Text,
  View,
  useAuthenticator,
  useTheme,
  Link,
} from "@aws-amplify/ui-react";
import { confirmSignUp, signUp } from "aws-amplify/auth";
import React from "react";
import { styled } from "styled-components";
export const data = [
  {
    title: "Net New Reviews",
    number: "4,51",
    star: "./static/images/icons/star.svg",
    img: "./static/images/icons/box.svg",
    className: "box",
    text: "Average rating for all products",
    backgroundImg: "./static/images/illustrative/Illustrative_1.png",
  },
  {
    title: "Total Requests Sent",
    number: "175,795",
    img: "./static/images/icons/ChartChip.png",
    className: "chart_chip",
    text: "vs last month",
    backgroundImg: "./static/images/illustrative/Illustrative_2.png",
  },
  {
    title: "Months Requests Sent",
    number: "11,900",
    img: "./static/images/icons/medal.svg",
    className: "box",
    text: "Goal: 10,000 requests",
    backgroundImg: "./static/images/illustrative/Illustrative_3.png",
  },
  {
    title: "Total Skipped Requests",
    number: "97",
    img: "./static/images/icons/ChartChipGreen.png",
    className: "chart_chip",
    text: "vs last month",
    backgroundImg: "./static/images/illustrative/Illustrative_4.png",
  },
];

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
        toSignUp('signUp'); // Перехід до форми реєстрації
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
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
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
    username: {
      placeholder: "oooo.yellow@gmail.com",

      color: "#231F20",
      label: "Email",
      fontFamily: "Wix Madefor Text",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      marginBottom: "8px",
    },
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
    username: {
      placeholder: "oooo.yellow@gmail.com",
      color: "#231F20",
      label: "Email",
      fontFamily: "Wix Madefor Text",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      marginBottom: "8px",
    },
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
      label: 'Confirm password',
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
