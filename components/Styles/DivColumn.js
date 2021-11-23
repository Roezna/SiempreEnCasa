import styled from 'styled-components';

export const DivColumn = styled.div`
display: flex;
flex-direction:column;
align-items: ${props => props.align ? props.align : 'center'};
justify-content: ${props => props.space ? props.space : 'center'};
width:100%;
max-width:${props => props.maxWidth};
background-color: ${props => props.bg}; 
margin: ${props => props.margin};
height:${props => props.height};
`
