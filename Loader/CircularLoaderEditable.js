import styled from 'styled-components';

const CircularLoaderEditable = styled.div`
  margin: auto;
  margin-top: 4rem;
  border-radius: 100%;
  border: ${(props) => props.stroke || "5px"} solid
    ${(props) => props.color || "#00AABB"};
  border-top: 5px solid #fff;
  width: ${(props) => props.size || "40px"};
  height: ${(props) => props.size || "40px"};
  animation: spin ${(props) => props.delay || "1s"} linear infinite;
  @keyframes spin {
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

export default CircularLoaderEditable;


