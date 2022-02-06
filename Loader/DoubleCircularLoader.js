import styled from 'styled-components';

const DoubleCircularLoader = styled.div`
  margin: auto;
  margin-top: 4rem;
  position: relative;
  border-radius: 100%;
  width: ${(props) => props.size || "40px"};
  height: ${(props) => props.size || "40px"};
  border: 4px solid ${(props) => props.color || "#00AABB"};
  animation: rounded2 ${(props) => props.delay || "2s"} linear infinite;
  ::before {
    content: "";
    position: absolute;
    border-radius: 100%;
    border: 2px solid ${(props) => props.borderColor || "#00AABB"};
    width: 50%;
    height: 50%;
    left: 25%;
  }

  @keyframes rounded2 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default DoubleCircularLoader;

