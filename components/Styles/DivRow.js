import styled, { css, keyframes } from 'styled-components';
import { colors } from './colors';


const rightToLeft = keyframes`
0% {
  right : -100%;
}

100%{
    right:0;
}
`;

const leftToRight = keyframes`
0% {
  right : 0%;
}

100%{
    right:-100%;
}
`;

export const DivRow = styled.div`
display: flex;
justify-content: ${props => props.space ? props.space : 'center'};
flex-wrap:wrap;
width:${props => props.width ? props.width : '100%'};
max-width:${props => props.maxWidth};
background-color: ${props => props.bg}; 
margin: ${props => props.margin};
margin-top: ${props => props.marginTop};
align-items:${props => props.align};
position:${props => props.position};
height:${props => props.height};
color:${props => props.color};
right:${props => props.right};
z-index:${props => props.capa};
animation:${props => props.animation === true ? css`${rightToLeft} 1s ease` : css`${leftToRight} 1s ease`};
overflow-y: ${props => props.overflow};

&::-webkit-scrollbar {
    width: 15px; 
  }
  
  &::-webkit-scrollbar-track {
    background: ${colors.primary}; 
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.contrast}; 
    border-radius: 20px; 
    border: 3px solid ${colors.primary}; 
  }

`