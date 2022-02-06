import styled from 'styled-components';

const PulseLoader = styled.div`
  margin: auto;
  margin-top: 4rem;
  position: relative;
  border-radius: 100%;
  background: ${(props) => props.color || "#00AABB"};
  width: ${(props) => props.size || "30px"};
  height: ${(props) => props.size || "30px"};

  animation: pulse ${(props) => props.delay || "2s"} linear infinite;
  ::before {
    content: "";
    position: absolute;
    border-radius: 100%;
    border:2px dotted ${(props) => props.borderColor || "#fff"};
    width: ${(props) => props.size || "30px"};
    height: ${(props) => props.size || "30px"};
    animation: rounded ${(props) => props.delay || "5s"} linear infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes rounded {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

module.exports = {
  PulseLoader
};

