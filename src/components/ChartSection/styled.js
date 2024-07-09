import styled from "styled-components";

export const StyledLabel = styled.div`
  ${({ theme }) => theme.fonts.eyebrow};
  color: ${({ theme }) => theme.colors.black};
  margin-right: 12px;
  margin-left: 12px;
`;