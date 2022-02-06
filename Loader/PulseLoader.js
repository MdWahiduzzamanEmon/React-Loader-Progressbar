import styled from 'styled-components';
import tw from 'twin.macro';

const PulseLoader = styled.div`
  ${tw`mx-auto mt-4 rounded-full relative`}
  background: ${(props) => props.color || '#00AABB'};
  width: ${(props) => props.size || '30px'};
  height: ${(props) => props.size || '30px'};

  animation: pulse ${(props) => props.delay || '2s'} linear infinite;
  ::before {
    content: '';
    ${tw`absolute rounded-full`}
    border:2px dotted ${(props) => props.borderColor || '#fff'};
    width: ${(props) => props.size || '30px'};
    height: ${(props) => props.size || '30px'};
    animation: rounded ${(props) => props.delay || '5s'} linear infinite;
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
    50%{
        transform: rotate(-180deg)
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;

export default PulseLoader;
