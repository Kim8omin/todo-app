import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const FadeInUpEffect = styled.div`
  position: relative;
  animation: ${fadeInUp} 5s;
`;

export default FadeInUpEffect;
