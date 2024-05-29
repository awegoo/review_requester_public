import styled from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => theme.buttons.tertiary};
  padding: ${({ theme }) => theme.buttons.sizes.small};
  ${({ theme }) => theme.fonts.buttonSmall};
  color: ${({ theme }) => theme.colors.white};
`;
