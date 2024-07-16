import styled from 'styled-components';

export const StyledItem = styled.div`
  width: 310px;
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  div {    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    &.no_margin {
      margin-bottom: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    &.blue_bg {
      background-color: #93B2F0;
      padding: 2px 8px;
      border-radius: 100px;
      display: flex;
      align-items: center;
    }
    
    &.yellow_bg {
      background-color: #FEF1AE;
      padding: 2px 8px;
      border-radius: 100px;
      display: flex;
      align-items: center;
    }
  }

  h3 {
    ${({ theme }) => theme.fonts.h3};
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: -0.4px;
  }

  p {   
    &.number {
      ${({ theme }) => theme.fonts.h1};
      color: ${({ theme }) => theme.colors.black};
      align-self: start;
      margin-bottom: 12px;
    } 
    
    &.info_text {
      ${({ theme }) => theme.fonts.bodyMedium};
      color: #103275;
      letter-spacing: -0.1px;
    }
    
    &.black_text {
      ${({ theme }) => theme.colors.black}
    }

    &.red_text {
      color: #6E1D0C;
    }
  }

  img {
    &.item_bg {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &.icon_info{
      width: 24px;
      height: 24px;
    }
    
    &.chart_chip {
      width: 91px;
      height: 28px;
      margin-right: 8px;
    }
  }
`;

