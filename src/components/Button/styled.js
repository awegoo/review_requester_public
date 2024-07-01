import styled from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => theme.buttons.secondary};
  padding: ${({ theme }) => theme.buttons.sizes.small};
  ${({ theme }) => theme.fonts.buttonSmall};
  color: ${({ theme }) => theme.colors.white};

  &&.avatar {
    ${({ theme }) => theme.buttons.primary};
    padding: 12px 12px;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
      transform: scale(0.95);
    }
  }

  &&.avatar a {
    text-decoration: none;
    ${({ theme }) => theme.fonts.buttonMedium};
    color: ${({ theme }) => theme.colors.white};
  }
  
  &&.select_country {
    align-items: center;
  }
  &&.bt_sign_out{
    &:hover {
      transform: scale(0.95);
    }
  }
 
  &&.bt_sign_out a {
   color: ${({ theme }) => theme.colors.blue};    
  }
`;
