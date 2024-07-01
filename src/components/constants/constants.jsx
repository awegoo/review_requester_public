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

export const list = [
  {
    id: "67-0384136-8086658",
    statusRequest: true,
    productName: {
      img: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-130969.jpg?t=st=1717503087~exp=1717506687~hmac=24a756866f8cca8874d15b950213eb74c466626f2b20be8497b5e95d946f07e7&w=1060",
      name: "Product 2",
    },
    units: 23,
    purchaseDate: new Date("2021-06-22T09:48:27.235Z"),
  },
  {
    id: "403-0384136-8086658",
    statusRequest: false,
    productName: {
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?t=st=1717503026~exp=1717506626~hmac=51d43aef770e5144f0ee4b2dfda1d10604826a01cdb3b0e177d04f1a7e314130&w=1380",
      name: "Product 3",
    },
    units: 23,
    purchaseDate: new Date("2023-04-15T12:32:11.118Z"),
  },
  {
    id: "124-0384136-8086658",
    statusRequest: true,
    productName: {
      img: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?t=st=1717503056~exp=1717506656~hmac=b1524be34786dcc1ec7e10f9eda21f9f735d43e3ef33f46fce6b27451772a2c1&w=1380",
      name: "Product 5",
    },
    units: 67,
    purchaseDate: new Date("2022-10-03T07:16:44.876Z"),
  },
  {
    id: 945,
    statusRequest: false,
    productName: { img: "img1.jpg", name: "Product 1" },
    units: 12,
    purchaseDate: new Date("2020-11-11T03:04:55.304Z"),
  },
  {
    id: 403,
    statusRequest: true,
    productName: { img: "img4.jpg", name: "Product 4" },
    units: 90,
    purchaseDate: new Date("2021-01-22T15:45:21.642Z"),
  },
  {
    id: 768,
    statusRequest: false,
    productName: { img: "img3.jpg", name: "Product 3" },
    units: 45,
    purchaseDate: new Date("2020-05-14T11:37:34.198Z"),
  },
  {
    id: 124,
    statusRequest: true,
    productName: { img: "img5.jpg", name: "Product 5" },
    units: 34,
    purchaseDate: new Date("2023-03-18T20:22:48.954Z"),
  },
  {
    id: 657,
    statusRequest: false,
    productName: { img: "img2.jpg", name: "Product 2" },
    units: 78,
    purchaseDate: new Date("2022-07-09T19:13:27.689Z"),
  },
  {
    id: 812,
    statusRequest: true,
    productName: { img: "img1.jpg", name: "Product 1" },
    units: 56,
    purchaseDate: new Date("2021-09-25T14:07:11.897Z"),
  },
  {
    id: 538,
    statusRequest: false,
    productName: { img: "img4.jpg", name: "Product 4" },
    units: 89,
    purchaseDate: new Date("2020-02-19T06:41:09.729Z"),
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

export const columns = [
  'Order ID',
  'Review Request Status',
  'Product Name',
  'UNITS',
  'PURCHASE_DATE',
];
