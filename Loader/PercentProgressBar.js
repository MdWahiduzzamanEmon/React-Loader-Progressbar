import styled from 'styled-components';

const PercentProgressBar = styled.div`
  margin: auto;
  margin-top: 4rem;
  position: relative;
  border-radius: 0.5rem;
  border: ${(props) => props.stroke || "1px"} solid
    ${(props) => props.color || "#00AABB"};
  width: ${(props) => props.size || "50%"};
  height: ${(props) => props.size || "9px"};
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: ${(props) => `${props.percent}%` || "0%"};
    background-color: ${(props) => props.color || "#00AABB"};
    animation: ${(props) => props.animation || "animation2"}
      ${(props) => props.delay || "10s"} linear 1;
  }
  ::after {
    content: "${(props) => `${props.percent}%` || "0%"}";
    position: absolute;
    top: -6px;
    right: -30px;
    font-size: ${(props) => props.fontSize || "12px"};
    color: ${(props) => props.textColor || "#00AABB"};
  }
  @keyframes animation2 {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => `${props.percent}%` || "0%"};
    }
  }
`;

export default PercentProgressBar;


