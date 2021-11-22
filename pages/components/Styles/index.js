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

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    background-color: ${colors.white}
`

export const Products = styled.div`
    display: flex;
    width:100%;
    justify-content : space-evenly;
    flex-wrap: wrap;
`

export const ImgProduct = styled.img`
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    src: url('${props => props.src}');
`
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

export const DivRow = styled.div`
    display: flex;
    justify-content: ${props => props.space ? props.space : 'center'};
    flex-wrap:wrap;
    width:100%;
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
    animation:${props => props.animation === 'true' && css`${rightToLeft} 0.5s ease`};
    
`
export const DivColumn = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width:100%;
    max-width:${props => props.maxWidth};
    background-color: ${props => props.bg}; 
    margin: ${props => props.margin};
`

export const Text = styled.span`
    text-align : center;
    font-size : ${props => props.size};
    margin : ${props => props.margin};
    font-weight: ${props => props.bold};
    color : ${props => props.color};
`

export const Button = styled.button`
    padding:0px 10px;
    background-color: ${colors.primary};
    color:white;
    font-size:1.5em;
    border : none;
    border-radius: 3px;
    cursor: pointer;
    margin : ${props => props.margin};
    font-size : ${props => props.size};


    &:hover{
        background-color: ${colors.secondary};
    }

`
