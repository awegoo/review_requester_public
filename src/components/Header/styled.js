import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: fixed;
`;

export const StyledContainer = styled.div`
  max-width: 1240px;
  height: 50px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButtonLink = styled.a`
  text-decoration: none;
  ${({ theme }) => theme.fonts.buttonSmall};
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
