import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const StyledLoader = styled.div`
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #f4f9ff;
  transition: opacity 3000ms;
  opacity: ${(props) => (props.$isBg ? 1 : 0)};
  animation: ${(props) => (!props.$isBg && fadeOut)} 1000ms forwards;
  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const AnimatePulse = css`
  animation: ${pulse} 1s infinite;
`;
// export const StyledLogoDiv = styled.div`
//   transition: transform 700ms;
//   ${(props) => (props.$isBg ?  AnimatePulse : 'transform: translateX(-100vw);')}
// `;

// export const StyledNameLogoDiv = styled.div`
//   transition: transform 700ms;
//   ${(props) => (!props.$isBg && 'transform: translateX(100vw);')}
// `;
const TranslateX = css`
  transform: translateX(100vw);
`;

export const StyledLogoDiv = styled.div`
  transition: transform 2000ms;
  ${(props) =>
    props.$isBg
      ? css`
          ${AnimatePulse};
        `
      : css`
          ${TranslateX};
        `};
`;

export const StyledNameLogoDiv = styled.div`
  transition: transform 2000ms;
  ${(props) =>
    !props.$isBg &&
     css`
          transform: translateX(-100vw);
        `
      };
`;