import styled from 'styled-components';

const CircularEffect = styled.div`
  margin: auto;
  margin-top: 4rem;
  position: relative;
  border-radius: 100%;
  border: 3px solid transparent;
  border-top: 3px solid ${(props) => props.color || '#00AABB'};
  width: 60px;
  height: 60px;
  animation: spin ${(props) => props.delay || '2.5s'} linear infinite;
  ::before {
    content: '';
    border-radius: 100%;
    position: absolute;
    background: ${(props) => props.color || '#00AABB'};
    width: 10px;
    top: 5px;
    height: 10px;
    box-shadow: 0 0 0 5px #24ecff33, 0 0 0 10px #24ecff22,
      0 0 0 15px #24ecff11,
      0 0 0 20px #24ecff00;
    animation: pulse2 ${(props) => props.delay || '3s'} linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(-0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @keyframes pulse2 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

module.exports = {
  CircularEffect
};


