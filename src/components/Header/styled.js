import { MenuItem, Select } from '@mui/material';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: fixed;
  border-bottom: 1px solid #D7DCE4;
  z-index: 10;
`;

export const StyledContainer = styled.div`
  max-width: 1440px;
  padding: 12px 64px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  ${({ theme }) => theme.fonts.buttonMedium};
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  &&.logo {
    cursor: pointer;
  }

  &&.nav_link {
    ${({ theme }) => theme.fonts.textLinkMedium};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }

  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
`;

export const StyledSelector = styled(Select)`    
  em {
    font-style: normal;
    ${({ theme }) => theme.fonts.buttonSmall};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &&.MuiMenuItem-root {
    ${({ theme }) => theme.fonts.buttonSmall};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

`;
