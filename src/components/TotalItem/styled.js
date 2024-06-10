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
    }
  }

  h4 {
    ${({ theme }) => theme.fonts.h4};
    color: ${({ theme }) => theme.colors.black};
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
      color: #0F6C56;
      letter-spacing: -0.1px;
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

    &.box {
      margin-right: 12px;
    }
    
    &.chart_chip {
      width: 91px;
      height: 28px;
      margin-right: 8px;
    }
  }
`;

