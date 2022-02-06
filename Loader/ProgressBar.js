import styled from 'styled-components';
import tw from 'twin.macro';

const AnimatedProgressBar = styled.div`
  ${tw` mx-auto mt-4 border rounded-lg relative`}
  width:${(props) => props.width || '50%'};
  height: ${(props) => props.height || '8px'};
  border: ${(props) => props.stroke || '1px'} solid ${(props) => props.color || '#00AABB'};
  ::after {
    content: '';
    ${tw`absolute`}
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: ${(props) => props.color || '#00AABB'};
    animation: ${(props) => props.animation || 'animation'} ${(props) => props.delay || '10s'}
      linear infinite;
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
