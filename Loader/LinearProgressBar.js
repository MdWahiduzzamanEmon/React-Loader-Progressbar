import styled from 'styled-components';
import tw from 'twin.macro';

const LinearProgressBar = styled.div`
  ${tw` mx-auto mt-4 border relative rounded-lg overflow-hidden`}
  border: ${(props) => props.stroke || '1px'} solid ${(props) => props.color || '#00AABB'};
  width: ${(props) => props.width || '50%'};
  height: ${(props) => props.height || '5px'};
  ::after {
    content: '';
    ${tw`absolute overflow-hidden`}
    top: 0;
    left: 0%;
    right: 0%;
    bottom: 0;
    width: 50%;
    background-color: ${(props) => props.color || '#00AABB'};
    animation: linearBar ${(props) => props.delay || '2s'} ease-in-out infinite;
  }
  @keyframes linearBar {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }

    
  }
`;

export default LinearProgressBar;
