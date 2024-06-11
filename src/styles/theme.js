// import { AmplifyTheme } from '@aws-amplify/ui-react';
import { css } from 'styled-components';

export const theme = {
  colors: {
    black: '#231F20',
    white: '#fff',
    blue: '#1C58CF',
    slate: '#707887',
    lightGrey: '#D7DCE4',
    lightBlue: '#F4F9FF',
    peach: '#F5B3A5',
    turquoise: '#89EFD7',
  },

  buttons: {
    primary: css`      
      all: unset;
      display: inline-flex;
      align-items: flex-start;
      gap: 10px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.colors.blue};

     
    `,
    secondary: css`
      all: unset;
      display: inline-flex;
      align-items: flex-start;
      gap: 10px;
      border-radius: 100px;
      border: 1.5px solid ${({ theme }) => theme.colors.blue};
    `,
    tertiary: css`
      all: unset;
      display: inline-flex;
      align-items: flex-start;
      gap: 10px;
      border-radius: 100px;
      border: 1px solid ${({ theme }) => theme.colors.white};
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
      }
    `,
    sizes: {
      small: '9px 16px',
      medium: '12px 24px',
      large: '16px 32px',
    },
  },

  fonts: {
    display: css`
      font-size: 80px;
      font-style: normal;
      font-weight: 700;
      line-height: 96px;
    `,
    h1: css`
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; 
    `,
    h2: css`
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    `,
    h3: css`
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
    `,
    h4: css`
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
    `,
    h5: css`
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
    `,
    eyebrow: css`
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 1.12px;
      text-transform: uppercase;
    `,
    bodyExtraLarge: css`
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    `,
    textLinkExtraLarge: css`
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      color: ${({ theme }) => theme.colors.blue};
    `,
    bodyLarge: css`
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    `,
    textLinkLarge: css`
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.blue};
    `,
    bodyMedium: css`
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    `,
    textLinkMedium: css`
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.blue};
    `,
    bodySmall: css`
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    `,
    textLinkSmall: css`
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      color: ${({ theme }) => theme.colors.blue};
    `,
    buttonLarge: css`
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;      
    `,
    buttonMedium: css`
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;      
    `,
    buttonSmall: css`
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;      
    `,
    formLabel: css`
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    `,
  },

  customAuthenticator: {
    
    name: 'my-theme',
    tokens: {
      colors: {
        background: {
          primary: { value: '#0000ff00' },
          // ...
        },
        font: {
          primary: { value: 'red' },
          // ...
        },
        button: {
          primary: {
            backgroundColor: { value: '#1C58CF' },
            borderRadius: { value: '100px' },
          },
        },
        // buttons: {
        //   primary: { value: 'blue' },
        //   // ...
        // },
      },
      

    },
    // button: {
    //   primary: css`      
    //     all: unset;
    //     display: inline-flex;
    //     align-items: flex-start;
    //     gap: 10px;
    //     border-radius: 100px;
    //     background-color: ${({ theme }) => theme.colors.blue};
  
       
    //   `}
  // },


//     container: css`
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       gap: 20px;
//       width: 100%;
//       max-width: 400px;
//       margin: 0 auto;
//       padding: 20px;
//       border-radius: 10px;
//       // background-color: ${({ theme }) => theme.colors.lightBlue};
//     `,
//     formContainer: css`
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       gap: 20px;
//       width: 100%;
//     `,
//     formField: css`
//       width: 100%;
//     `,
    formButton: css`
      width: 100%;
      background-color: #1C58CF;
      border-radius: 100px;

    `,
//     formFooter: css`
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       gap: 20px;
//       width: 100%;
//     `,
//     formFooterText: css`
//       font-size: 14px;
//       font-style: normal;
//       font-weight: 400;
//       line-height: 22px;
//       // color: ${({ theme }) => theme.colors.slate};
//     `,
//     formFooterLink: css`
//       font-size: 14px;
//       font-style: normal;
//       font-weight: 500;
//       line-height: 22px;
//       // color: ${({ theme }) => theme.colors.blue};
//     `,
//     formFooterLinkHover: css`
//       // color: ${({ theme }) => theme.colors.slate};
//     `,
//     button: css`
//       all: unset;
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       gap: 10px;
//       padding: ${({ theme }) => theme.buttons.sizes.medium};
//       border-radius: 100px;
//       background-color: ${({ theme }) => theme.colors.blue};
//       color: ${({ theme }) => theme.colors.white};
//       font-size: 16px;
//       font-style: normal;
//       font-weight: 600;
//       line-height: 24px;
//       cursor: pointer;
//       transition: background-color 0.3s ease-in-out;

//       &:hover {
//         background-color: ${({ theme }) => theme.colors.slate};
//       }
//     `,
//   }
},
};


