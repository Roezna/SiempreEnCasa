import styled from 'styled-components';
import { colors } from './colors';

export const CardProduct = styled.div`
display : flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 230px;
margin : 10px;
background-color: ${colors.white};
border-radius: 10px;
padding:10px;
text-align:center;
transition: transform .3s;
border: 5px solid ${colors.primary};

&:hover{
    transform: scale(1.02);
    cursor:pointer;
}
`