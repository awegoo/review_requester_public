import styled from "styled-components";

export const StyledLabel = styled.div`
  ${({ theme }) => theme.fonts.eyebrow};
  color: ${({ theme }) => theme.colors.black};
  margin-right: 12px;
  margin-left: 12px;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 6px;
  h3 {
    ${({ theme }) => theme.fonts.h3};
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    ${({ theme }) => theme.fonts.bodyMedium};
    color: ${({ theme }) => theme.colors.slate};
  }
`;