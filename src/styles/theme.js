import { css } from 'styled-components';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

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
};

export const themeTable = useTheme([
  getTheme(),
  {
    Table: `
      border-radius: 6px;
      border: 1px solid #D7DCE4;
      --data-table-library_grid-template-columns: minmax(0px, 2fr) minmax(0px, 2fr) minmax(0px, 4fr) minmax(0px, 1fr) minmax(0px, 1.5fr) ;
      margin-bottom: 16px;
    `,
  },
  {
    HeaderRow: `
      background: #3DC2A233;
  `,
  },
  {
    HeaderCell: `
    justify-content: flex-start;
    padding: 12px 16px;
    align-items: flex-start;
    font-family: 'Wix Madefor Text';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;

    div {
      &.css-cz6xlx div:after {
        content: '';
      }
    }
  `,
  },
  {
    Row: `
    &.row-select-single-selected {
      background: #3DC2A233;
    }`,
  },
  {
    BaseCell: `
      text-align: center;
      display: flex;
      align-items: center;

      &:first-of-type {
        text-align: left;
        border-right: 1px solid #D7DCE4;
        
        div {
        display: flex;
        align-items: center;
        justify-content: flex-start;  
        }
      }

      &:nth-of-type(3) {
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          overflow-wrap: break-word;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis; 
          white-space: normal;         
        }
      }

      &:focus {
        background: #E0EEFF;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;  
      }

      img {
        margin-right: 16px;
      }
    `,
  },
  {
    typography: {
      fontWeightRegular: `
        font-family: 'Wix Madefor Text';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
      `,
      fontWeightMedium: `
        font-family: 'Wix Madefor Text';
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
      `,
    },
  },
]);

export const CustomStyleForSelector = {
  borderRadius: "6px",
  background: "#FFFFFF",
  "& .MuiSelect-select": {
    padding: "13px 36px",
    fontFamily: "Wix Madefor Text",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1.5px solid #D7DCE4",
  },
  "& .MuiSvgIcon-root": {
    color: "#231F20",
  },
};
