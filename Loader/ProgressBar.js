import styled from 'styled-components';

const AnimatedProgressBar = styled.div`
  margin: auto;
  margin-top: 4rem;
  position: relative;
  border-radius: 0.5rem;
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "8px"};
  border: ${(props) => props.stroke || "1px"} solid
    ${(props) => props.color || "#00AABB"};
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: ${(props) => props.color || "#00AABB"};
    animation: ${(props) => props.animation || "animation"}
      ${(props) => props.delay || "10s"} linear infinite;
  }
  @keyframes animation {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export default AnimatedProgressBar;


