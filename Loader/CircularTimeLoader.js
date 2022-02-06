import styled from 'styled-components';

const CircularTimeLoader = styled.div`
  margin: auto;
  margin-top: 4rem;
  border-radius: 100%;
  border: 20px solid ${(props) => props.color || "#00AABB"};
  border-top: 5px solid ${(props) => props.color || "#00AABB"};
  width: 50px;
  height: 50px;
  animation: spin ${(props) => props.delay || "3s"} linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default CircularTimeLoader;

